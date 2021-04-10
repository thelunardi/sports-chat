import Menu from './Menu'
import Profile from './Menu/Profile'

function Topics() {
    return (
        <div style={ { maxHeight: '100vh' } }
             className='flex flex-col items-center lg:w-1/4 p-4 bg-brand-topic mr-2 text-white'>
            <pre className='text-2xl'>&lt;/&gt; ChatSports</pre>
            <Profile />
            <div className='flex justify-center w-full p-4 bg-brand-topic mr-2 text-white overflow-y-auto'>
                <div className='flex flex-col items-center justify-items-end'>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Topics
