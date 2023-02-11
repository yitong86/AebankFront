import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Home/home';
import Container from '../common/Container';
import Navbar from '../Navbar/Navbar';
const AppRouter = () => {
    return(
    <Container>

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   
  </Container>
    )
}
 
export default AppRouter;