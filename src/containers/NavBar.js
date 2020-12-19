import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: -1
    //looking for less scrappy way
    // marginLeft: -10,
    // marginRight: -10,
    // mrginTop: -10
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const history = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (path) => {
    //switch through tabs
    history.push(path)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        variant="fullWidth"
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="secondary"
      >
          <Tab  label="Welcome Page" onClick={() => handleClick("/welcome")} />
          <Tab label="My Dashboard" onClick={() => handleClick("/dashboard")} />
          <Tab  label="Courses" onClick={() => handleClick("/courses")}  />
          <Tab label="Login" onClick={() => handleClick("/login")}   />
      </Tabs>
    </Paper>
  );
}