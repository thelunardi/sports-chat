import { AiFillStar } from 'react-icons/all'

function Starred() {
    const starred = [
        {
            id: 1,
            channel: 'futebol',
        },
    ]

    return (
        <div className='mt-10'>
            <div className='flex'>
                <h1 className='mx-1 mt-1 text-gray-400'><AiFillStar /></h1>
                <h1 className='text-gray-400'>STARRED</h1>
                <h1 className='mx-1 text-gray-400'>({starred.length})</h1>
            </div>
            <div className='flex flex-col pl-1'>
            {
                starred.map(_starred => (
                    <a key={ _starred.id } href='/' className='mt-1 p-1 text-gray-300 bg-brand-topic'># { _starred.channel }</a>
                ))
            }
            </div>
        </div>
    )
}

export default Starred