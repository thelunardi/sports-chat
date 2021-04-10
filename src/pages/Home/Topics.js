function Topics() {
    return (
        <div className="flex justify-center lg:w-1/3 p-4 bg-brand-topic mr-2 text-white">
            <div className="flex flex-col items-center justify-items-end">
                <pre className="text-2xl">&lt;/&gt; ChatSports</pre>
                <div className="mt-4">
                    <div className='flex'>
                        <h1 className="mx-1 text-gray-300">Avatar</h1>
                        <h1 className="text-gray-300">Alexandre</h1>
                    </div>
                </div>
                <div className='items-start'>
                    <div className="mt-4">
                        <div className='flex'>
                            <h1 className="mx-1 text-gray-300">Icon</h1>
                            <h1 className="text-gray-300">STARRED</h1>
                            <h1 className="mx-1 text-gray-300">(2)</h1>
                        </div>
                        <h1 className="text-gray-300">#1</h1>
                    </div>
                    <div className="mt-4">
                        <div className='flex'>
                            <h1 className="mx-1 text-gray-300">Icon</h1>
                            <h1 className="text-gray-300">CHANNELS</h1>
                            <h1 className="mx-1 text-gray-300">Icon</h1>
                        </div>
                        <h1 className="text-gray-300">#1</h1>
                    </div>
                    <div className="mt-4">
                        <div className='flex'>
                            <h1 className="mx-1 text-gray-300">Icon</h1>
                            <h1 className="text-gray-300">DIRECT MESSAGES</h1>
                            <h1 className="mx-1 text-gray-300">(2)</h1>
                        </div>
                        <h1 className="text-gray-300">@Lele</h1>
                        <h1 className="text-gray-300">@Lolo</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Topics
