import Topics from "./Topics"
import Header from "./Header"
import Content from "./Content"
import Message from "./Message"
import Info from "./Info"

function Home() {
    return (
        <div className='flex w-full bg-brand-graydark'>
            <Topics />
            <div className='flex flex-col items-center w-full'>
                <Header />
                <Content />
                <Message />
            </div>
            <Info />
        </div>
    )
}

export default Home
