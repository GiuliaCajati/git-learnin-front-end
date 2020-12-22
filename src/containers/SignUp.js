import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux'
import {signUp} from "../actions"


function SignUp(props) {

    const dispatch = useDispatch()

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        let password = e.target.querySelector("#password").value
        let password_confirmation = e.target.querySelector("#confirm-password").value

        if (password === password_confirmation){

            const user = {
                name: e.target.querySelector("#name").value,
                email: e.target.querySelector("#email").value,
                password: e.target.querySelector("#password").value,
                password_confirmation: e.target.querySelector("#confirm-password").value
            }
            dispatch(signUp(user))

        }
        else {
            alert("The passwords do not match")
            e.target.querySelector("#confirm-password").value = ""
            e.target.querySelector("#password").value = ""
        }
        
    }

    return (
        <div style = {{
            backgroundColor: '#cfe8fc',
            height: "100vh"
        }}>
            <form 
                onSubmit = {handleSubmit} 
                style = {{
                    width: '10%',
                    paddingTop: "5%",
                    textAlign: "center",
                    marginLeft: "45%",
                }}
            >
                <TextField style = {{marginRight: "1%"}}
                id = "name"
                label = 'name'
                />


                <TextField style = {{marginRight: "1%"}}
                    id = "email"
                    label = 'email'

                />
                <TextField style = {{
                        marginRight: "1%",
                        marginLeft: "1%"}}
                    id = "password"
                    label = 'password'
                />
                <TextField style = {{
                        marginRight: "1%",
                        marginLeft: "1%"}}
                    id = "confirm-password"
                    label = 'confirm password'
                />

                <Button
                    type = "submit"  
                    style = {{ marginTop: "5%"}}
                    variant = "contained"
                    >
                        Sign up
                </Button>

            </form>
        </div>
    );
}

export default SignUp;