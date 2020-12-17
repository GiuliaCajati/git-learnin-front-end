
import './App.css';
import {  Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Router } from 'react-router'
import Login from './containers/Login'
import SignUp from './containers/SignUp'
import DashBoard from './containers/DashBoard'
import NavBar from './containers/NavBar'
import CourseIndex from './containers/CourseIndex'
import LessonIndex from './containers/LessonIndex'
import LessonShow from './containers/LessonShow'
import NotFound from './components/NotFound'
import About from './components/About'
import Welcome from './components/Welcome'
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory()


const App = () => {
  // check state from redux 
  // const loggedInUser = useSelector( state => state.loggedInUser )

  return (
    <div className="App">
      <NavBar/>

      <Router history={history}> 
        <Switch>
          
          <Route exact path="/" render={Welcome} />
          <Route exact path="/login" render={Login} />
          <Route exact path="/signup" render={SignUp} />
          <Route exact path="/dashboard" render={DashBoard} />
          <Route exact path="/courses" render={CourseIndex} />
          {/* list of lessons for a specific course */}
          <Route exact path="/courses/:id" render={LessonIndex} />
          <Route exact path="/lessons/:id" render={LessonShow} />
          <Route exact path="/about" render={About} />
          <Route render={NotFound}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
