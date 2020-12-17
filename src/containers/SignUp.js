import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const callback = (e) =>{
    e.preventDefault();
    const user = {
        username: e.target.querySelector("#username").value,
        password: e.target.querySelector("#password").value
    }
    debugger
}

function SignUp(props) {
    return (
        <div>
            <form 
                onSubmit = {callback} 
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