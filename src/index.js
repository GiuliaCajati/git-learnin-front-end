import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//react router dom
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

//material ui themes
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles' 

//redux 
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

//provides history to the App 
export const history = createBrowserHistory()

//redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));


// const theme = createMuiTheme({
//   palette:{
//     primary:{
//       main: '#0000FF',
//     },
//     secondary:{
//       main: '#0000FF',
//     },
//     error:'#FF0000'
//   },
// })


//<ThemeProvider theme={theme} > 
ReactDOM.render(
  <Router history={history}> 
    <Provider store={store}>
      <ThemeProvider > 
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);

