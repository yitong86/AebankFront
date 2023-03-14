import React  from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from '../Home/home';
import Container from '../common/Container';
import Navbar from '../Navbar/Navbar';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import { Dashboard } from '../../dashbord/dashbord';
import Appointment from '../../appointment/appointment';
import CheckingAccounts from '../../balance/CheckingAccounts';
import SavingAccounts from '../../balance/SavingAccounts';
import Loans from '../../balance/Loans';
import ContactUs from '../contactUs/ContactUs';
import CheckingDetail from '../../balance/CheckingDetail';
import SavingDetail from '../../balance/SavingDetail';
import LoanDetail from '../../balance/LoanDetail';
import Stocks from '../stock/Stocks';


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
      <Route path ="/stock" element={<Stocks/>}/>
      <Route path ="/dashboard" element={<Dashboard />}/>
      <Route path ="/loan" element={<Loans/>}/>
    

      <Route path ="/appointment" element={<Appointment/>}/>
      <Route path ="/checkingAccount" element={<CheckingAccounts/>}/>
      <Route path ="/savingAccount" element={<SavingAccounts/>}/>
      <Route path="/checkingAccount/:devId" element={<CheckingDetail />} />
      <Route path="/savingAccount/:devId" element={<SavingDetail />} />
      <Route path="/loan/:devId" element={<LoanDetail />} />
    </Routes>
   
  </Container>
  </div>
    )
}
 
export default AppRouter;