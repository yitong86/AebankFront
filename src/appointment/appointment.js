
import React,{useState} from "react";
import Button from "../components/common//Button";

function Appointment(){
    const[date,setDate] = useState();

    console.log("Date",date);
    return (
        <>
        <h1>Selected Date : {date}</h1>
        <input type ="date" onChange={e=>setDate(e.target.value)}/>
        
        <Button  onClick={() => alert('Thank you for your booking!')}>
            Submit
        </Button>
        
        </>
    )
}
export default Appointment;