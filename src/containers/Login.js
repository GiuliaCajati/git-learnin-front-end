import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { login } from "../actions"
import { ConsoleWriter } from 'istanbul-lib-report';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: "1%"
    }
    }))

    
    
    const Login = (props) => {
        const classes = useStyles()
        
        const dispatch = useDispatch()
    
        const callback = (e) =>{
            e.preventDefault();
            const user = {
                email: e.target.querySelector("#email").value,
                password: e.target.querySelector("#password").value
            }
            dispatch(login(user))

        }

    return (

        <div 
            style = {{
                textAlign: 'center',
                backgroundColor: '#cfe8fc',
                height: "100vh"
            }} 
            data-testid="Login">
            <form 
                onSubmit = {callback} 
                style = {{
                    width: '100%', // Fix IE 11 issue.
                    paddingTop: "5%",
                    textAlign: "center"
                }}
            >
                
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
                    style = {{ marginTop: ".7%"}}
                    variant = "contained"

                    data-testid= "loginSubmit"

                    >
                        Login
                </Button>


            </form>
            {/* Make sure the sign up link is going to /signup */}
            <Link 
                href="signup"  
                variant="body2" 
                data-testid = "toSignup"
                style = {{
                    color: "#FF6464",
                    marginTop: "2%"
                }}
            >
            <b>
                {"Need to Git-Learnin? Sign Up"}
            </b>        
            </Link>
        </div>
    );
}

export default Login;