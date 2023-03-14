import React from 'react';
import { useNavigate } from 'react-router-dom'
import BorderCard from '../components/common/BorderCard';

export function Dashboard() {

    const navigate = useNavigate()
  
    return (
       
        <div className="item" style={{paddingTop:"90px",height:"80px"}}>
            
             
             
           
            <BorderCard className ="item1" onClick={() => navigate('/checkingAccount')}>
                Checking Account
            </BorderCard>
            <BorderCard className ="item2" onClick={() => navigate('/savingAccount')}>
                Saving Account
            </BorderCard>
            
            <BorderCard className ="item3" onClick={() => navigate('/loan')}>
                Loan
            </BorderCard>
            <BorderCard className ="item4" onClick={() => navigate('/stock')} >
                Stock
            </BorderCard>
            <BorderCard className ="item5" onClick={() => navigate('/appointment')}>
                Appointment
            </BorderCard>
          
        </div>
    )
}