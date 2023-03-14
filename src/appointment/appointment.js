import React,{useState,useCallback} from "react";
import Button from "../components/common//Button";
import { useNavigate } from "react-router-dom";
import BorderCard from "../components/common/BorderCard";
import Video from "./Video";

function Appointment(){
    const[date,setDate] = useState();
    const navigate = useNavigate()
    console.log("Date",date);
    const [value,setValue] = useState();
    const navigae = useNavigate();

    const handleJoin = useCallback(()=>{
        navigae(`/room/${value}`);

    },[navigae,value]);

    return (
        <>
        <h1>Selected Date : {date}</h1>
        <input type ="date" onChange={e=>setDate(e.target.value)}/>
        
        <Button  onClick={() => alert('Thank you for your booking!')}>
            Submit 
        </Button>
        {/* <BorderCard
        Card className ="item3" onClick={() => navigate("/room/:roomId")}>
                Chat
            </BorderCard> */}
             <input 
        value ={value} 
        onChange = {(e) => setValue(e.target.value)}
        type ="text"
        placeholder="Enter Room Code"
        />
    <Button onClick ={handleJoin}>Join</Button>

    
        </>
    )
}
export default Appointment;