import React from 'react';
import './App.css';
import Home from  './pages/Home';
import SingleRoom from  './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Error from './pages/Error'
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NabBar';

function App() {
  return (
    <div className="">
      <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Rooms" component={Rooms} />
      <Route exact path="/Rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
