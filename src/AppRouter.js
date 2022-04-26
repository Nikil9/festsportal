import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App'
import Login from './Login'
import Home from './Home'
import PdfComponent from './components/PdfComponent';
import FestReg from './FestReg';
import About from './About/About'
import Publish from './Publish';

const AppRouter = () => (
  <Router >
    <Switch>
      <Route path="/" exact> <Login /> </Route>
      <Route path="/signup"> <App /> </Route>
      <Route path="/home"> <Home /> </Route>
      <Route path="/about"> <About /> </Route>
      <Route path="/ticket"> <PdfComponent/> </Route>
      <Route path="/register"> <FestReg/> </Route>
      <Route path="/publish"> <Publish/> </Route>
    </Switch>
  </Router>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, rootElement)
export default AppRouter;