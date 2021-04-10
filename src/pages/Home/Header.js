import { AiFillStar, AiOutlineStar } from 'react-icons/all'

function Header() {
    const channel = {
        id: 1,
        name: 'Futebol',
        starred: true,
        onlineUsers: 3,
    }

    return (
        <div className="flex w-full m-2 p-2 bg-brand-main rounded-sm">
            <div className="flex w-full justify-between items-center">
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex">
                            <h1 className="mr-1 text-2xl"># { channel.name }</h1>
                            { channel.starred ?
                                (<h1 className='mx-1 mt-1 text-yellow-400'><AiFillStar size='24' /></h1>)
                                :
                                (<h1 className='mx-1 mt-1 text-gray-400'><AiOutlineStar size='24' /></h1>)
                            }
                        </div>
                        <h1>{ channel.onlineUsers } users</h1>
                    </div>
                </div>
                <div className="flex">
                    <input
                        placeholder="Search Message"
                        type="text"
                        className="block w-full px-4 py-1 bg-gray-100 border-2 border-transparent rounded outline-none"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
