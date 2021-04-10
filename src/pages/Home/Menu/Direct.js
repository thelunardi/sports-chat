import { AiFillStar, BsFillCircleFill } from 'react-icons/all'

const COLORS = {
    on: 'green',
    off: 'gray',
    occuped: 'red',
    out: 'orange',
}

function Direct() {
    const users = [
        {
            id: 1,
            username: 'l3l3',
            status: 'on',
        },
        {
            id: 2,
            username: 'l0l0',
            status: 'off',
        },
        {
            id: 3,
            username: 'lala',
            status: 'out',
        },
        {
            id: 4,
            username: 'l1l1',
            status: 'occuped',
        },
    ]

    return (
        <div className='mt-10'>
            <div className='flex'>
                <h1 className='mx-1 mt-1 text-gray-400'><AiFillStar /></h1>
                <h1 className='text-gray-400'>DIRECT MESSAGES</h1>
                <h1 className='mx-1 text-gray-400'>({users.length})</h1>
            </div>
            <div className='flex flex-col pl-1'>
                {
                    users.map(user => (
                        <a href={`/direct/${user.username}`} key={ user.id } className='mt-1 flex justify-between'>
                            <h1 className='text-gray-300 p-1'>@ { user.username }</h1>
                            <h1 className='text-gray-300 p-1' style={{color: COLORS[user.status]}}><BsFillCircleFill /></h1>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Direct