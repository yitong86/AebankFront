import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export function Dashboard() {

    const navigate = useNavigate()

    return (
       
        <Container className="item" style={{paddingTop:"90px",height:"80px"}}>
            
             <h1 style={{marginRight:"80px"}}>Dashboard</h1>
             
           
            <button class ="item1" onClick={() => navigate('/signup')} >
                New Customer
            </button>
            
            <button class ="item2" onClick={() => navigate('/deposit')}>
                Deposit
            </button>
            <button class ="item3" onClick={() => navigate('/withdraw')} >
                Withdraw
            </button>
            <button class ="item4" onClick={() => navigate('/transfer')}>
                Transfer
            </button>
            <button class ="item5" onClick={() => navigate('/balance')}>
                Balance
            </button>
        </Container>
    )
}