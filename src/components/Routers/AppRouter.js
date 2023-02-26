import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Home/home';
import Container from '../common/Container';
import Navbar from '../Navbar/Navbar';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
const AppRouter = () => {
    return(
        <div style={{width:"100%", flexDirection:"column"}}>
    <Container>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/signup" element={<Register/>}/>
      <Route path ="/login" element={<Login/>}/>
    </Routes>
   
  </Container>
  </div>
    )
}
 
export default AppRouter;