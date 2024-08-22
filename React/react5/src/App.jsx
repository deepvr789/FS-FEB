import React from 'react'
import { Link,BrowserRouter as RajniRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Users from './Users/Users'
import Navbar from './Navbar/Navbar'
const App = () => {
  return <div>
         <RajniRouter>
                <Navbar/>
                <Routes>
                    <Route path="users" element={<Users/>}/>
                    <Route path="index" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </RajniRouter>
          </div>
}

export default App