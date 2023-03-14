import React , { useState, useEffect } from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";

const NewUserForm = ({onSubmit,onChange,newUser}) => {
    //const {onSubmit,onChange,newUser} = props;

const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e)=>{
        onChange(e.target.id, e.target.value);
                      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(newUser));
        setIsSubmit(true);
      };

      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(newUser);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fName) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };



    return(
       <Container>
         {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(newUser, undefined, 2)}</pre>
      )} */}
    <Form onSubmit ={onSubmit} style={{marginTop:"1em"}}>
        <InlineInputContainer>
            <Input
            name = "fName"
            id="fName"
            value={newUser.fName}
            placeholder ={"First Name"}
            onChange = {handleChange}
            required
            />
             <p>{formErrors.username}</p>
             <Input
            name = "lName"
            id="lName"
            value={newUser.lName}
            placeholder ={"Last Name"}
            onChange = {handleChange}
            />
             
        </InlineInputContainer>

        <InlineInputContainer>
        <Input
            name = "email"
            id="email"
            value={newUser.email}
            placeholder ={"Email Address"}
            onChange = {handleChange}
            type = "email"
            required
            />
             <p>{formErrors.email}</p>
        </InlineInputContainer>
        <InlineInputContainer>
        <Input
            name = "password"
            id = "password"
            value={newUser.password}
            placeholder ={"Password"}
           
            onChange = {handleChange}
             type = "password"
            required
            />
             <p>{formErrors.password}</p>
        </InlineInputContainer>

        <InlineInputContainer>
        <Input
            name = "phoneNumber"
            id="phoneNumber"
            value={newUser.phoneNumber}
            placeholder ={"Phone Number"}
            
            onChange = {handleChange}
            type = "number"
            />
        </InlineInputContainer>

        <InlineInputContainer>
        <Input
            name = "dateOfBirth"
            id="dateOfBirth"
            value={newUser.dateOfBirth}
            placeholder ={"Date Of Birth"}
            onChange = {handleChange}
           type="date"
            />
        </InlineInputContainer>
        <InlineInputContainer>
        <Input
            name = "accountNumber"
            id="ccountNumber"
            value={newUser.ccountNumber}
            placeholder ={"Account Number"}
            onChange = {handleChange}
            type = "text"
            />
        </InlineInputContainer>
        
        <Button >Submit</Button>
    </Form>
       </Container>

    )
}
export default NewUserForm;