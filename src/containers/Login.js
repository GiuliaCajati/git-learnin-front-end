import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: "1%"
    }
    }))
function Login(props) {
    // const classes = useStyles()
    const loginURL = "http://localhost:3000/login"

    return (
        <div style = {{textAlign: 'center'}}>
            <form style = {{
                width: '100%', // Fix IE 11 issue.
                marginTop: "5%",
                textAlign: "center"
                
            }}>
                
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
                    style = {{ marginTop: ".7%"}}
                    variant = "contained">
                        Login
                </Button>


            </form>
            <Link href="signup"  variant="body2"><b>
                {"Need to Git-Learnin? Sign Up"}
            </b>        
            </Link>
        </div>
    );
}

export default Login;