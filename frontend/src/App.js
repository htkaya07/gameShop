
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Deals from "./common/Deals";
import Main from "./main/Main";


import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";

//Redux
import { Provider } from "react-redux";
import store from './Redux/store'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
   
      <Navigation  />
      <Routes />
  </div>
  </BrowserRouter>

    </Provider>




   
  );
}

export default App;
