import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
 import Settings from './Components/Pages/settings/Settings'
 import Login from './Components/Pages/login/Login'
 import Home from './Components/Pages/Home/Home';
import Single from './Components/Pages/single/single';
 import Write from './Components/Pages/Write/write'
import Register from './Components/Pages/register/Register'


function App() {
   const user=false;

  
  return (
    <div className="app">
    

    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route exact path='/' element=<Home/> />
    <Route path='/register' element={user ? <Home/>:<Register/>} />
    <Route path='/login' element={user ? <Home/>:<Login/>} />
    <Route path='/write' element={user ? <Write/>:<Register/>} /> 
    <Route path='/settings' element={user ? <Settings/>:<Register/>} /> 
    <Route path='/post/:postId' element={<Single/>} />
    
    
    
    </Routes>

   
    

    </BrowserRouter>
    

         
         
        
           
        </div>
        
       
     
    
  );
}

export default App;



