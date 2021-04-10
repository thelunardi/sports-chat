function Header() {
    return (
        <div className='flex w-full m-2 p-2 bg-brand-main rounded-sm'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <h1 className='mr-1'>#Futebol</h1>
                            <h1>Icon</h1>
                        </div>
                        <h1>3 users</h1>
                    </div>
                </div>
                <div className='flex'>
                    <input
                        placeholder='Search Message'
                        type='text'
                        className='block w-full px-4 py-1 bg-gray-100 border-2 border-transparent rounded outline-none'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
