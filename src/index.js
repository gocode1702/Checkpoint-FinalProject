import React from 'react';
import ReactDOM from 'react-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Provider } from "react-redux";
import store from "./InterfaceUsers/API-seminaire/components/redux/Store";
import { BrowserRouter  } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
       
          {" "}
          <App />{" "}
       
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

