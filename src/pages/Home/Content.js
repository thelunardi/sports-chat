import CardMessage from '../../components/CardMessage'

function Content() {
    const message = [
        {
            id: 1,
            username: 'lala',
            value: 'HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHA',
            timestamp: '2 minutes ago',
        },
        {
            id: 2,
            username: 'lala',
            value: 'kkkk',
            timestamp: '1 minutes ago',
        },
    ]

    return (
        <div className="flex justify-between w-full m-1 p-2 bg-brand-main rounded-sm content">
            <div className="flex flex-col mr-4 w-full break-all">
                {
                    message.map(_message => (
                        <CardMessage key={ _message.id } message={ _message } />
                    ))
                }
            </div>
        </div>
    )
}

export default Content
