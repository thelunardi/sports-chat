import Starred from './Starred'
import Channels from './Channels'
import Contact from './Contact'

function Menu () {
    return (
        <div className='items-start'>
            <Starred />
            <Channels />
            <Contact />
        </div>
    )
}

export default Menu