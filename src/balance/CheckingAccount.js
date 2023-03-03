import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { hostUrl } from '../config';
import axios from 'axios';

const CheckingAccount = (props) =>{
  
    const [auth] = useContext(AuthContext);

    const[checking,setChecking] = useState([]);




    useEffect(() => {
        const _getChecking = async () => {
            try {
                const res = await axios.get(
                    `${hostUrl}/api/checkingAccounts/`, 
                    {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                console.log(res.data);
                setChecking(res.data);
              
            } catch (err) {
              console.log(err)
            }
        }
       
        _getChecking();
    }, [])

   

  return (
    <div>
      <h3>CheckingAccount</h3>
      {checking.map((item)=>(
      <p key = {item.balance}>{item.balance}</p>
   
      ))}
    </div>
  )
}
  
export default CheckingAccount;