import React  from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Home/home';
import Container from '../common/Container';
import Navbar from '../Navbar/Navbar';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import { Dashboard } from '../../dashbord/dashbord';
import{Deposit} from '../../deposit/deposit';
import{Withdraw} from '../../withdraw/withdraw';
import Appointment from '../../appointment/appointment';
import CheckingAccounts from '../../balance/CheckingAccounts';
import SavingAccounts from '../../balance/SavingAccounts';

import ContactUs from '../contactUs/ContactUs';
import CheckingDetail from '../../balance/CheckingDetail';
import SavingDetail from '../../balance/SavingDetail';


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
      <Route path ="/dashboard" element={<Dashboard />}/>
      <Route path ="/deposit" element={<Deposit/>}/>
      <Route path ="/withdraw" element={<Withdraw/>}/>
      <Route path ="/appointment" element={<Appointment/>}/>
      <Route path ="/checkingAccount" element={<CheckingAccounts/>}/>
      <Route path ="/savingAccount" element={<SavingAccounts/>}/>
      <Route path="/checkingAccount/:devId" element={<CheckingDetail />} />
      <Route path="/savingAccount/:devId" element={<SavingDetail />} />
    </Routes>
   
  </Container>
  </div>
    )
}
 
export default AppRouter;