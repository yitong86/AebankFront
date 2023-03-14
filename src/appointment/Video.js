import { Button } from "bootstrap";
import React,{useState,useCallback} from "react";
import { useNavigate } from "react-router-dom";

const Video = () =>{
    const [value,setValue] = useState();
    const navigae = useNavigate();

    const handleJoin = useCallback(()=>{
        navigae(`/room/${value}`);

    },[navigae,value]);



    return <div>
        <input 
        value ={value} 
        onChange = {(e) => setValue(e.target.value)}
        type ="text"
        placeholder="Enter Room Code"
        />
    <Button onClick ={handleJoin}>Join</Button>

    
        </div>
}
export default Video;