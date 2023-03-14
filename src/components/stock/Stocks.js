import React , {useContext, useEffect, useState} from 'react'
import { useApiDataContext } from '../Providers/ApiDataProvider';
import { StockOverview } from './StockOverview';
import axios from 'axios';
import { AuthContext } from '../Providers/AuthProvider';

export const Stocks = () => {
  const BASE_URL = "http://localhost:3000/api/overview/"
  const [auth] = useContext(AuthContext);
  const {data} = useApiDataContext();
  const [formData,setFormData] = useState({query: '', selectedQuery: 'all',uploadInput: ''})

  const {setData} = useApiDataContext();
  const {selectedQuery, query, uploadInput} = formData;

  const noQueryOptions = ['all']
  useEffect(() => {
    const requestData = async() =>{
        const res = await axios.get(
            BASE_URL + (noQueryOptions.includes(selectedQuery) ? selectedQuery: selectedQuery + "/" + query), 
            {
            headers: {
                Authorization: `Bearer ${auth.token}`
            }
        });
     // console.log("Requesting Data..."); 
     
      
        setData(res.data);
        setFormData({...formData, query: ''})
        //console.log(res.data);
       // setAuth({token})
        alert("Request was successful")
      }
      
      requestData();
    }, [])




  return (
    <div >
       <h2>Stock Information</h2> 
      <p style={{marginLeft:"20px"}}>
        {Array.isArray(data) ? data.map(stock => {
          return (
         <StockOverview data ={stock} />
        )}) : JSON.stringify(data,null,2)}
       
        </p>
        </div>
  )
}
export default Stocks;