import TempPage from './TempPage.jsx'

const columns = [
    { key: 'code',  label: 'CODE'  },
    { key: 'name',  label: 'NAME'  },
    { key: 'phone', label: 'PHONE' },
    { key: 'email', label: 'EMAIL' },
]

const data = [
    { code: 'CU01', name: 'Vera',     phone: '0123456789', email: 'wow@gmail.com'  },
    { code: 'CU02', name: 'Ttime',    phone: '0123456789', email: 'wow1@gmail.com' },
    { code: 'CU03', name: 'Jungkook', phone: '0123456789', email: 'wow2@gmail.com' },
    { code: 'CU04', name: 'Namjoon',  phone: '0123456789', email: 'wow3@gmail.com' },
    { code: 'CU05', name: 'Jimin',    phone: '0123456789', email: 'wow4@gmail.com' },
    { code: 'CU06', name: 'J-Hope',   phone: '0123456789', email: 'wow5@gmail.com' },
    { code: 'CU07', name: 'V',        phone: '0123456789', email: 'wow6@gmail.com' },
    { code: 'CU08', name: 'SUGA',     phone: '0123456789', email: 'wow7@gmail.com' },
    { code: 'CU09', name: 'Jin',      phone: '0123456789', email: 'wow8@gmail.com' },
]

export default function CustomerPage({ pic, username }) {
    return (
        <TempPage
            pic={pic}
            username={username}
            title="Cast"
            columns={columns}
            data={data}
            onEdit={(row)   => console.log('Edit',   row)}
            onDelete={(row) => console.log('Delete', row)}
            onCreate={()    => console.log('Create new cast')}
        />
    )
}