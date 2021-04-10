import Starred from './Starred'
import Channels from './Channels'
import Direct from './Direct'

function Menu () {
    return (
        <div className='items-start'>
            <Starred />
            <Channels />
            <Direct />
        </div>
    )
}

export default Menu