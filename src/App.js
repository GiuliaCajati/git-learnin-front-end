
import './App.css';
import {  Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Login from './containers/Login'
import SignUp from './containers/SignUp'
import DashBoard from './containers/DashBoard'
import NavBar from './containers/NavBar'
import CourseIndex from './containers/CourseIndex'
import LessonIndex from './containers/LessonIndex'
import LessonShow from './containers/LessonShow'
import NotFound from './components/NotFound'
import About from './components/About'

function App() {
  // check state from redux 
  const loggedInUser = useSelector( state => state.loggedInUser )

  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={DashBoard} />
        <Route exact path="/courses" component={CourseIndex} />
        {/* list of lessons for a specific course */}
        <Route exact path="/courses/:id" component={LessonIndex} />
        <Route exact path="/lessons/:id" component={LessonShow} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound}/>
      </Switch>

    </div>
  );
}

export default App;
