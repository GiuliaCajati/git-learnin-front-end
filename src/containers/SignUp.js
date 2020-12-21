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
            email: e.target.querySelector("#email").value,
            password: e.target.querySelector("#password").value,
            name: e.target.querySelector("#name").value,
            password_confirmation: e.target.querySelector("#password").value
        }
        dispatch(signUp(user))
    }

    return (
        <div style = {{
            backgroundColor: '#cfe8fc'
        }}>
            <form 
                onSubmit = {handleSubmit} 
                style = {{
                    width: '10%',
                    marginTop: "5%",
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