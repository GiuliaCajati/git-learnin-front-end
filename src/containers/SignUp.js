import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux'
import {signUp} from "../actions"


function SignUp(props) {

    const dispatch = useDispatch()

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = {
            username: e.target.querySelector("#username").value,
            password: e.target.querySelector("#password").value
        }
        dispatch(signUp(user))
    }

    return (
        <div>
            <form 
                onSubmit = {handleSubmit} 
                style = {{
                    width: '100%', // Fix IE 11 issue.
                    marginTop: "5%",
                    textAlign: "center"
                }}
            >
                
                <TextField style = {{marginRight: "1%"}}
                    id = "username"
                    label = 'username'

                />
                <TextField style = {{
                        marginRight: "1%",
                        marginLeft: "1%"}}
                    id = "password"
                    label = 'password'
                />

                <Button
                    type = "submit"  
                    style = {{ marginTop: ".7%"}}
                    variant = "contained"
                    >
                        Sign up
                </Button>

            </form>
        </div>
    );
}

export default SignUp;