import React, {useEffect,useState,useContext} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import { AuthContext } from '../components/Providers/AuthProvider';

const SavingDetail=(props)=>{
    const params = useParams();
const[detail,setDetail] = useState({
    id:params.devId
});
const [loading, setLoading] = useState(true);
const [auth, setAuth] = useContext(AuthContext);
//userEffect run code one time on mounting

//useEffect run once on mounting then again on any rerender where 
// a dependency is updateed
useEffect(() => {
    const _fetchSavingDetail = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/savingAccounts/${detail.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        }
      )
      console.log(res.data);
      setDetail(res.data);
      setLoading(false);
    }
    setLoading(true);
    _fetchSavingDetail();
  }, [])

    return (
        <>
        <h1>SavingingAccount Detail</h1>
        <h2>Balance: {detail.balance}</h2>
        <h2>PostDate: {detail.postDate}</h2>
        <h2>Status: {detail.status}</h2>
        </>
    )
}
export default SavingDetail;