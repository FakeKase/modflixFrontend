import { useNavigate } from 'react-router-dom'
import TempPage from './TempPage.jsx'

const columns = [
    { key: 'code',         label: 'ORDER ID'   },
    { key: 'customerName', label: 'CUSTOMER'   },
    { key: 'itemCount',    label: 'ITEMS'      },
    { key: 'totalDisplay', label: 'TOTAL (฿)' },
    { key: 'date',         label: 'DATE'       },
    { key: 'status',       label: 'STATUS'     },
]

export default function CartPage({ pic, username, data = [], onDelete }) {
    const navigate = useNavigate()

    const enriched = data.map(o => ({
        ...o,
        itemCount:    o.items?.length ?? 0,
        totalDisplay: Number(o.total).toLocaleString('th-TH', { minimumFractionDigits: 2 }),
    }))

    return (
        <TempPage
            pic={pic}
            username={username}
            title="Orders / Cart"
            columns={columns}
            data={enriched}
            onEdit={(row)   => navigate(`/orders/edit/${row.code}`)}
            onDelete={(row) => onDelete?.(row)}
            onCreate={()    => navigate('/orders/create')}
        />
    )
}
