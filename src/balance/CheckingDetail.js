import React, {useEffect,useState,useContext} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import { AuthContext } from '../components/Providers/AuthProvider';

const CheckingDetail=(props)=>{
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
    const _fetchDetail = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/checkingAccounts/${detail.id}`,
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
    _fetchDetail();
  }, [])

    return (
        <>
        <h1>CheckingAccount Detail</h1>
        <h2>Balance: {detail.balance}</h2>
        <h2>PostDate: {detail.postDate}</h2>
        </>
    )
}
export default CheckingDetail;