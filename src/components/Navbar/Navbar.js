import React, { Fragment } from "react";

const Navbar = (props) => {
    return (
        <Fragment>
            <div style={{
            backgroundColor:"lightseagreen",
            position:"absolute",
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
        <h1>button</h1>
        </div>
        <div style={{height:"75px"}}/>
        </Fragment>
    )
}
export default Navbar;