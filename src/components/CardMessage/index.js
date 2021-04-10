import Avatar from 'react-avatar'

function CardMessage(props) {
    const { ...messages } = props
    const message = messages.message
    return (
        <div className="flex w-full m-2 p-2 bg-brand-main rounded-sm">
            <div className="flex w-full justify-between items-center">
                <div className="flex">
                    <div>
                        <Avatar name='Alexandre Lunardi' size='50' src='images/avatar/avatar.jpeg'/>
                    </div>
                    <div className="flex flex-col ml-2 pl-2 items-start border-l-2 border-yellow-400">
                        <div className="flex items-baseline">
                            <b><h1 className="mr-1 text-black">{ message.username }</h1></b>
                            <h1 className="mr-1 text-gray-400 text-sm">{ message.timestamp }</h1>
                        </div>
                        <h1 className='w-full'>{ message.value }</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMessage