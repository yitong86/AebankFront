import React ,{useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import NewUserForm from "./NewUserForm";
import Splash from "../common/Splash";
import registerPhoto from "../../assets/registerPhoto.jpg";
import axios from "axios";
import { hostUrl } from "../../config";
import {AuthContext} from '../Providers/AuthProvider';
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

    const [auth,setAuth] = useContext(AuthContext)
    const navigate = useNavigate();
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
        //create user post,login the token,use token create customer
    };


    const createuser = async (data) =>{
try{
    const res = await axios.post(`${hostUrl}/api/auth/register`,data)
    console.log(res.data);
    login(data);

}catch(err){
   // console.err(err.message);
}
   }
    const login = async(data) => {
        try{
            const res = await axios.post(`${hostUrl}/api/auth/login`,data);
            console.log(res.data)
            createCustomer(data,res.data.token);
            navigate('/login')
        }catch(err){
          console.error(err.response.data);
        }
    }
    const createCustomer = async(data,token) => {
        try{
            const res = await axios.post(`${hostUrl}/api/auth/newCustomer`, 
            data,
             {
                headers:
                {Authorization: `Bearer ${token}`
            }});
            console.log(res.data)
            setAuth({token})
            alert(res.data.id);
            navigate('/login')

        }catch(err){
          //  console.error(err.response.data);
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
        <h>hi</h>
        </Container>
    )
}
export default Register;