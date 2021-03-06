import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import firebase from "firebase/app";
import thunk from 'redux-thunk';
import "semantic-ui-css/semantic.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

import './index.css';
import App from './root/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './root/rootReducer';
import { firebaseConfig } from './root/config';

firebase.initializeApp(firebaseConfig);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
