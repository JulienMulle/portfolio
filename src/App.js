 import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';
 
 const App = () => {
   return (
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/projet-1" component={Project1} />
       <Route exact path="/projet-2" component={Project2} />
       <Route exact path="/projet-3" component={Project3} />
       <Route exact path="/projet-4" component={Project4} />
       <Route exact path="/contact" component={Contact} />
       <Redirect to path="/" />
     </Switch>
   )
 }
 
 export default App;
 