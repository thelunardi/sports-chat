function Info() {
    const channel = {
        name: 'Futebol'
    }

    return (
        <div className='w-1/3 h-full m-2 p-2 bg-brand-main rounded-sm'>
            <div className="flex justify-between items-center">
                <div className="flex flex-col m-2 items-start border-2 border-gray-200 w-full">
                    <div className="flex items-baseline border-b-2 p-2 w-full">
                        <b><h1 className="mr-1 text-black">About # { channel.name }</h1></b>
                    </div>
                    <h1 className='w-full p-2 border-b-2'>Channel Details</h1>
                    <h1 className='w-full p-2 border-b-2'>Top Posts</h1>
                    <h1 className='w-full p-2'>Created By</h1>
                </div>
            </div>
        </div>
    )
}

export default Info
