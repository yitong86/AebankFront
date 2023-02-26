import React, {useState, useContext} from "react";
import axios from "axios";
import LoginForm from "./LoginForm";
import Container from "../common/Container"
import Splash from "../common/Splash";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { hostUrl } from "../../config";



const Login = (props) => {

    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: "",

    })

    const navigate = useNavigate();

    const [auth, setAuth] = useContext(AuthContext);

    const updateForm = (field, value) => {
        setCurrentUser({
            ...currentUser,
            [field]: value
        });
    }

    const onSubmit = () => {
        const data = currentUser;
        data.username = data.email;

        _loginUser(data);
    }

    const _loginUser = async (data) => {

        try {
            const res = await axios.post(`${hostUrl}/api/auth/login`, data);

            setAuth({
                token: res.data.token,
                profile: {},
                roles: res.data.roles,

            })

        navigate("/account");
        
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Container>
            <Splash
    
            style={{
                height: "20vh",
                color: "#F1F1F1"
            }}
            >
                <h1>Login</h1>
            </Splash>
            <LoginForm
                currentUser={currentUser}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}


export default Login;