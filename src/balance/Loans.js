import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { hostUrl } from '../config';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import {useNavigate} from 'react-router-dom';
import Loan from './Loan';

const Loans = (props) =>{
  
    const [auth] = useContext(AuthContext);

    const[loan,setLoan] = useState([]);

    const[loading,setLoading] = useState(true);

    const navigate = useNavigate();
//use effect to pull list of checking
//use state to store the checking
//neet beare tokem to get the checking list

    useEffect(() => {
        const _getLoan = async () => {
            try {
                const res = await axios.get(
                    `${hostUrl}/api/loans/accounts`, 
                    {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                console.log(res.data);
                setLoading(false);
                setLoan(res.data);
              
            } catch (err) {
              //console.log(err)
            }
        }
       setLoading(true);
        _getLoan();
    }, [])

    const displayLoans = () => {
      return loan.map(dev => <Loan Loan={dev} key ={dev.id} onSelect = {onSelect}/>)
    }
    const onSelect = (devId) => {
      navigate(`/loan/${devId}`)
    }
  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Loan</h1>
      
      <h2>AccountNumber: </h2>
      {loading ? <Spinner />
      :

      displayLoans()
    
    }
    
    </div>
  )
}
  
export default Loans;