import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//material ui themes
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles' 

//redux 
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'


//redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#c2cad0" //light blue-grey
      },
      secondary: {
        main: "#546e7a", //dark blue
        roseGold: "#E3AEB1"
      },
      error:{main: '#FF0000'}
    },
    //fontFamily: 'Chilanka' // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
  });


ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

