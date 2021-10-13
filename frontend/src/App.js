
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Deals from "./common/Deals";
import Main from "./main/Main";


import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";


const App = () => {
  return (
<BrowserRouter>
<div className="App">
      {/* <h1> App.js top</h1> */}
      <Navigation  />
      
      <Routes />
  </div>
  </BrowserRouter>



   
  );
}

export default App;
