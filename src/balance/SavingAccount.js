import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { hostUrl } from '../config';
import axios from 'axios';

const SavingAccount = (props) =>{
  
    const [auth] = useContext(AuthContext);

    const[saving,setSavinging] = useState([]);




    useEffect(() => {
        const _getSaving = async () => {
            try {
                const res = await axios.get(
                    `${hostUrl}/api/savingAccounts/`, 
                    {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                console.log(res.data);
                setSavinging(res.data);
              
            } catch (err) {
              //console.log(err)
            }
        }
       
        _getSaving();
    }, [])

   

  return (
    <div>
      <h3>SavingAccount</h3>
      {saving.map((item)=>(
      <p key = {item.balance}>{item.balance}</p>
   
      ))}
    </div>
  )
}
  
export default SavingAccount;