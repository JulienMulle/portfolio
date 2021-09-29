 import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
 
 const App = () => {
   return (
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/portfolio" component={Portfolio} />
       <Route exact path="/contact" component={Contact} />
       <Redirect to path="/" />
     </Switch>
   )
 }
 
 export default App;
 