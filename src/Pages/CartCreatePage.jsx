import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './cartcreate.module.css'
import Navbar from '../navbar/Navbar.jsx'

const STATUSES = ['PENDING', 'PAID', 'CANCELLED']

export default function CartCreatePage({ pic, username, customers = [], products = [], orders = [], onSave }) {
    const navigate   = useNavigate()
    const { code }   = useParams()
    const existing   = orders.find(o => o.code === code)

    const [customerCode, setCustomerCode] = useState(existing?.customerCode ?? '')
    const [status,       setStatus]       = useState(existing?.status ?? 'PENDING')
    const [cartItems,    setCartItems]    = useState(existing?.items ?? [])
    const [search,       setSearch]       = useState('')

    const isEdit = Boolean(existing)

    const customer = customers.find(c => c.code === customerCode)

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase())
    )

    const addItem = (product) => {
        if (cartItems.some(i => i.productCode === product.code)) return
        setCartItems(prev => [...prev, {
            productCode: product.code,
            productName: product.name,
            type:        product.type,
            genre:       product.genre,
            price:       parseFloat(product.price),
        }])
    }

    const removeItem = (productCode) =>
        setCartItems(prev => prev.filter(i => i.productCode !== productCode))

    const total = cartItems.reduce((sum, i) => sum + i.price, 0)

    const generateCode = () => {
        const n = orders.length + 1
        return `OR${String(n).padStart(3, '0')}`
    }

    const handleSave = () => {
        if (!customerCode || cartItems.length === 0) return
        const now = new Date()
        const dateStr = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`
        const order = {
            code:         isEdit ? existing.code : generateCode(),
            customerCode,
            customerName: customer?.name ?? customerCode,
            items:        cartItems,
            total,
            date:         isEdit ? existing.date : dateStr,
            status,
        }
        onSave?.(order, isEdit)
        navigate('/orders')
    }

    return (
        <div className={styles.page}>
            <Navbar pic={pic} username={username} />
            <h1 className={styles.title}>{isEdit ? `Edit Order — ${existing.code}` : 'Create New Order'}</h1>

            <div className={styles.container}>

                {/* Customer + Status */}
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Customer & Status</div>
                    <div className={styles.selectRow}>
                        <span className={styles.selectLabel}>Customer</span>
                        <select
                            className={styles.select}
                            value={customerCode}
                            onChange={e => setCustomerCode(e.target.value)}
                        >
                            <option value="">— Select customer —</option>
                            {customers.map(c => (
                                <option key={c.code} value={c.code}>
                                    {c.code} — {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.selectRow} style={{ marginTop: 20 }}>
                        <span className={styles.selectLabel}>Status</span>
                        <div className={styles.statusRow}>
                            {STATUSES.map(s => (
                                <button
                                    key={s}
                                    onClick={() => setStatus(s)}
                                    className={[
                                        styles.statusBadge,
                                        styles[s.toLowerCase()],
                                        status === s ? styles.active : '',
                                    ].join(' ')}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Add Products */}
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Add Products</div>
                    <div className={styles.searchRow}>
                        <input
                            type="search"
                            placeholder="Search movie / series by name or code..."
                            className={styles.searchInput}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className={styles.productList}>
                        {filteredProducts.map(p => {
                            const inCart = cartItems.some(i => i.productCode === p.code)
                            return (
                                <div key={p.code} className={styles.productItem}>
                                    <div className={styles.productInfo}>
                                        <span className={styles.productName}>{p.name}</span>
                                        <span className={styles.productMeta}>{p.code} · {p.type} · {p.genre}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <span className={styles.productPrice}>฿{Number(p.price).toLocaleString()}</span>
                                        <button
                                            className={styles.addBtn}
                                            onClick={() => addItem(p)}
                                            disabled={inCart}
                                        >
                                            {inCart ? 'Added' : '+ Add'}
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                        {filteredProducts.length === 0 && (
                            <div className={styles.emptyCart}>No products found.</div>
                        )}
                    </div>
                </div>

                {/* Cart Summary */}
                <div className={styles.card}>
                    <div className={styles.cardTitle}>Cart Items</div>
                    {cartItems.length === 0 ? (
                        <div className={styles.emptyCart}>No items in cart yet. Add products above.</div>
                    ) : (
                        <table className={styles.cartTable}>
                            <thead>
                                <tr>
                                    <th>CODE</th>
                                    <th>NAME</th>
                                    <th>TYPE</th>
                                    <th>GENRE</th>
                                    <th>PRICE (฿)</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.productCode}>
                                        <td className={styles.codeCell}>{item.productCode}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.type}</td>
                                        <td>{item.genre}</td>
                                        <td style={{ fontWeight: 700, color: '#FF6B00' }}>
                                            {item.price.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                                        </td>
                                        <td>
                                            <button
                                                className={styles.removeBtn}
                                                onClick={() => removeItem(item.productCode)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    <div className={styles.summaryRow}>
                        <span className={styles.summaryLabel}>TOTAL</span>
                        <span className={styles.summaryTotal}>
                            ฿{total.toLocaleString('th-TH', { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                </div>

                {/* Action buttons */}
                <div className={styles.actionRow}>
                    <button className={styles.cancelBtn} onClick={() => navigate('/orders')}>
                        Cancel
                    </button>
                    <button
                        className={styles.saveBtn}
                        onClick={handleSave}
                        disabled={!customerCode || cartItems.length === 0}
                    >
                        {isEdit ? 'Save Changes' : 'Place Order'}
                    </button>
                </div>

            </div>
        </div>
    )
}
