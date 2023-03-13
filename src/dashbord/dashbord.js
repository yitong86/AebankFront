import React from 'react';
import { useNavigate } from 'react-router-dom'
import BorderCard from '../components/common/BorderCard';

export function Dashboard() {

    const navigate = useNavigate()
  
    return (
       
        <div className="item" style={{paddingTop:"90px",height:"80px"}}>
            
             
             
           
            <BorderCard className ="item5" onClick={() => navigate('/checkingAccount')}>
                Checking Account
            </BorderCard>
            <BorderCard className ="item6" onClick={() => navigate('/savingAccount')}>
                Saving Account
            </BorderCard>
            
            <BorderCard className ="item2" onClick={() => navigate('/deposit')}>
                Deposit
            </BorderCard>
            <BorderCard className ="item3" onClick={() => navigate('/withdraw')} >
                Withdraw
            </BorderCard>
            <BorderCard className ="item4" onClick={() => navigate('/appointment')}>
                Appointment
            </BorderCard>
          
        </div>
    )
}