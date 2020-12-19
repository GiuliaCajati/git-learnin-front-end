import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


import About from './About.js'


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    container:{
        backgroundColor: '#cfe8fc', 
        height: '80vh',
    },
    welcome:{
       marginLeft: '80vh',
      // padding: '0px'
    } 
  });

function Welcome(props) {
    const classes = useStyles();
    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl" className={classes.container}>
                    <Container className={classes.welcome}>
                        <h2>WELCOME!!</h2> 
                        <h2>READY TO GIT LEARNIN??</h2>
                        <h5>MISSION, VISION AND VALUES </h5>
                    </Container>  
                </Container>
            </React.Fragment>
        
            <About/>
        </div>
    );
}

export default Welcome;