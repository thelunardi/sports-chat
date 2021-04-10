function Message() {
    return (
        <div className='flex flex-col justify-center w-full m-2 p-4 bg-brand-main rounded-sm'>
            <div className='flex'>
                <textarea
                    placeholder='Write Your Message'
                    className='w-full rounded-md border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none'
                />
            </div>
            <div className='flex flex-row justify-between'>
                <button className='px-6 py-2 mt-2 bg-brand-danger w-full rounded-md focus:outline-none'>
                    Send Message
                </button>
                <button className='ml-2 px-6 py-2 mt-2 bg-brand-warning w-full rounded-md focus:outline-none'>
                    Update Media
                </button>
            </div>
        </div>
    )
}

export default Message
