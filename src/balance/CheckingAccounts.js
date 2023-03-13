import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { hostUrl } from '../config';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import {useNavigate} from 'react-router-dom';
import CheckingAccount from './CheckingAccount';

const CheckingAccounts = (props) =>{
  
    const [auth] = useContext(AuthContext);

    const[checking,setChecking] = useState([]);

    const[loading,setLoading] = useState(true);

    const navigate = useNavigate();
//use effect to pull list of checking
//use state to store the checking
//neet beare tokem to get the checking list

    useEffect(() => {
        const _getChecking = async () => {
            try {
                const res = await axios.get(
                    `${hostUrl}/api/checkingAccounts/accounts`, 
                    {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                console.log(res.data);
                setLoading(false);
                setChecking(res.data);
              
            } catch (err) {
              //console.log(err)
            }
        }
       setLoading(true);
        _getChecking();
    }, [])

    const displayCheckings = () => {
      return checking.map(dev => <CheckingAccount CheckingAccount={dev} key ={dev.id} onSelect = {onSelect}/>)
    }
    const onSelect = (devId) => {
      navigate(`/checkingAccount/${devId}`)
    }
  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>CheckingAccount</h1>
      
      <h2>AccountNumber: </h2>
      {loading ? <Spinner />
      :

      displayCheckings()
      // <h3>
      // {checking.map((checking)=>(
      // <p key = {checking.balance}>{checking.accountNumber}</p>
   
      // ))}
      // </h3>
    }
    
    </div>
  )
}
  
export default CheckingAccounts;