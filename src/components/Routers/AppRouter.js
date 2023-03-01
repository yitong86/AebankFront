import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Home/home';
import Container from '../common/Container';
import Navbar from '../Navbar/Navbar';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import { Dashboard } from '../../dashbord/dashbord';
import{Deposit} from '../../deposit/deposit';
import{Withdraw} from '../../withdraw/withdraw';
import{Transfer} from '../../transfer/transfer';
import{Balance} from '../../balance/balance';


import ContactUs from '../contactUs/ContactUs';
import Account from '../../dashbord/Account';

const AppRouter = () => {
    return(
        <div style={{width:"100%", flexDirection:"column"}}>
    <Container>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/signup" element={<Register/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/contact" element={<ContactUs/>}/>
      <Route path ="/dashboard" element={<Dashboard/>}/>
      <Route path ="/deposit" element={<Deposit/>}/>
      <Route path ="/withdraw" element={<Withdraw/>}/>
      <Route path ="/transfer" element={<Transfer/>}/>
      <Route path ="/balance" element={<Balance/>}/>
      <Route wpath ="/account" element={<Account/>}/>
    </Routes>
   
  </Container>
  </div>
    )
}
 
export default AppRouter;