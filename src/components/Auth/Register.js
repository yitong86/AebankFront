import React ,{useState} from "react";
import Container from "../common/Container";
import NewUserForm from "./NewUserForm";
import Splash from "../common/Splash";
 import registerPhoto from "../../assets/registerPhoto.jpg";
import axios from "axios";
import { hostUrl } from "../../config";

const Register = (props)=>{
    const [newUser,setNewUser] = useState({
        email:"",
        password:"",
        fName:"",
        lName:"",
        accountNumber:"",
        phoneNumber:"",
        dataOfBirth:"",

    })
    //change new object new memory address
    //take the object ,recreate object by taking all original data and modifiy the what we want to modify
    const updateForm = (field, value) =>{
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const onSubmit = () =>{
       // alert.alert("Submitted");
        console.log(newUser);
        const data = newUser;
        data.name = `${data.fName} ${data.lName}`;
      
        data.username = data.email;

        createuser(data);
        //create user,login,create customer
    };


    const createuser = async (data) =>{
try{
    const res = await axios.post(`${hostUrl}/api/customers/`,data)
    console.log(res.data)

}catch(err){
console.log(err.response.data);
}
    }
    return(
        <Container>
            <Splash image={registerPhoto} style={{
                height:"20vh",
                color:"#F1F1F1",
                textShadow:"1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000,-1px 0 0 #000"
                }}>
        <h1>Register</h1>
      
        </Splash>
        <NewUserForm 
        newUser={newUser} 
        onChange={updateForm} 
        onSubmit ={onSubmit}
        />
        </Container>
    )
}
export default Register;