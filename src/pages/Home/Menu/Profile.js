import Avatar from 'react-avatar'
import { MdArrowDropDown } from 'react-icons/all'

function Profile() {
    return (
        <div className='mt-4'>
            <div className='flex'>
                <Avatar name='Alexandre Lunardi' size='35' round src='images/avatar/avatar.jpeg'/>
                <h1 className='mt-1 ml-2 text-gray-300'>Alexandre</h1>
                <h1 className='mx-1 mt-1 text-gray-300'><MdArrowDropDown size='24' /></h1>
            </div>
        </div>
    )
}

export default Profile