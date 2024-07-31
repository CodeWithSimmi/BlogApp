import './Home.css'
import Header from '../../Header/Header'
import Post from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'



const Home = () => {
  return (

    <>
    <Header/>
    <div className='home'>
    <Post/>
    <Sidebar/>
      
    </div>

    </>
    
  )
}

export default Home
