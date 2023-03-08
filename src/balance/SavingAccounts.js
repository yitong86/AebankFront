import React, {useContext, useEffect, useState} from 'react';
import { AuthContext } from '../components/Providers/AuthProvider';
import { hostUrl } from '../config';
import axios from 'axios';
import Spinner from '../faCommon/Spinner';
import SavingAccount from './SavingAccount';


const SavingAccounts = (props) =>{
  
    const [auth] = useContext(AuthContext);

    const[saving,setSavinging] = useState([]);

    const[loading,setLoading] = useState(true);


    useEffect(() => {
        const _getSaving = async () => {
            try {
                const res = await axios.get(
                    `${hostUrl}/api/savingAccounts/accounts`, 
                    {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                console.log(res.data);
                setLoading(false);
                setSavinging(res.data);
              
            } catch (err) {
              //console.log(err)
            }
        }
        setLoading(true);
        _getSaving();
    }, [auth.token])

   
    const displaySavings = () => {
        return saving.map(dev => <SavingAccount SavingAccount={dev} />)
      }
  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>SavingAccount</h1>

      <h2>AccountNumber: </h2>
      {loading ? <Spinner />
      :

      displaySavings()
  }
      {/* {saving.map((item)=>(
      <p key = {item.balance}>{item.balance}</p>
   
      ))} */}
    </div>
  )
}
  
export default SavingAccounts;