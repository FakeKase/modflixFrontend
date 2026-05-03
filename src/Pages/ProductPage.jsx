import TempPage from './TempPage.jsx'

const columns = [
    { key: 'code',  label: 'CODE'  },
    { key: 'name',  label: 'NAME'  },
    { key: 'price', label: 'PRICE' },
    { key: 'type',  label: 'TYPE'  },
]

const data = [
    { code: 'P01', name: 'Avatar 1',             price: '200.00', type: 'MOVIE'  },
    { code: 'P02', name: 'Avatar 2',             price: '200.00', type: 'MOVIE'  },
    { code: 'P03', name: 'Avatar 3',             price: '200.00', type: 'MOVIE'  },
    { code: 'P04', name: 'Star War',             price: '150.00', type: 'MOVIE'  },
    { code: 'P05', name: 'Your name',            price: '150.00', type: 'MOVIE'  },
    { code: 'P06', name: 'Stranger Things ss1',  price: '300.00', type: 'SERIES' },
    { code: 'P07', name: 'Itaewon Class',        price: '450.00', type: 'SERIES' },
    { code: 'P08', name: 'One piece',            price: '450.00', type: 'SERIES' },
    { code: 'P09', name: 'Blue Lock',            price: '200.00', type: 'SERIES' },
]

export default function ProductPage({ pic, username }) {
    return (
        <TempPage
            pic={pic}
            username={username}
            title="Products"
            columns={columns}
            data={data}
            onEdit={(row)   => console.log('Edit',   row)}
            onDelete={(row) => console.log('Delete', row)}
            onCreate={()    => console.log('Create new product')}
        />
    )
}