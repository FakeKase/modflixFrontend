import TempPage from './TempPage.jsx'

const columns = [
    { key: 'code',      label: 'CODE'       },
    { key: 'name',      label: 'NAME'       },
    { key: 'totalCast', label: 'Total Cast' },
    { key: 'type',      label: 'TYPE'       },
]

const data = [
    { code: 'CA01', name: 'Avatar 1',           totalCast: 20, type: 'MOVIE'  },
    { code: 'CA02', name: 'Avatar 2',           totalCast: 25, type: 'MOVIE'  },
    { code: 'CA03', name: 'Avatar 3',           totalCast: 30, type: 'MOVIE'  },
    { code: 'CA04', name: 'Star War',           totalCast: 21, type: 'MOVIE'  },
    { code: 'CA05', name: 'Your name',          totalCast: 7,  type: 'MOVIE'  },
    { code: 'CA06', name: 'Stranger Things ss1',totalCast: 15, type: 'SERIES' },
    { code: 'CA07', name: 'Itaewon Class',      totalCast: 14, type: 'SERIES' },
    { code: 'CA08', name: 'One piece',          totalCast: 20, type: 'SERIES' },
    { code: 'CA09', name: 'Blue Lock',          totalCast: 10, type: 'SERIES' },
]

export default function CastPage({ pic, username }) {
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