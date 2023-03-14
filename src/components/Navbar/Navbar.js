import React, {Fragment ,useContext} from "react";
import {NavLink} from 'react-router-dom';
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";
const Navbar = (props) => {
    const [auth] = useContext(AuthContext);

    return (
        <Fragment>
            <div style={{
            backgroundColor:"lightseagreen",
            position:"fixed",
            width:"100%",
            zIndex:9999,
            top:0,
            left:0,
            height:"75px",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"}}>
        <h1 style={{fontFamily:"monospace",
    fontWeight:"bold",fontSize:"2.5em",
    margin:"0 20px"}}>Aebank</h1>
<div style={{margin:"0 20px",
            flexDirection:"row",
            background:"transparent",
            userSelect:"none",
            alignItems:"center"
}}>
    <NavButton to ="/" label ="Home"/>

    {auth.token ? (
    <NavButton to ="/dashboard" label = "Dashboard" />

    ) : (
        <Fragment>
        <NavButton to="/login" label = "Login"/>
        <NavButton to="/signup" label = "Sign Up"/>
    </Fragment>
    )}
    
    <NavButton to="/contact" label='Contact us' />
    </div>
        </div>
        <div style={{height:"75px"}}/>
        </Fragment>
    )
}
export default Navbar;