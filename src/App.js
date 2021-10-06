import React, {useEffect} from 'react'
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';
import { AnimatePresence } from 'framer-motion';
 
 const App = () => {

  //navigation pour scroller de gauche à droite et de droite à gauche, au lieu du traditionnelle vers le bas ou le haut
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
      const handleScrollToElement = (e)=>{
        const url = window.location.origin + "/";

        const wheelRouter = (after, before) => {
          if (e.wheelDeltaY < 0) {
            setTimeout(()=>{
              history.push(after)
            }, 500);

          } else if (e.wheelDeltaY > 0) {
            setTimeout(()=>{
              history.push(before)
            }, 500);
          }
        }
      
        switch (window.location.href.toString()) {
          case url:
            if (e.wheelDeltaY < 0){
              setTimeout(()=>{
                history.push('projet-1')
              }, 500);     
          }
            break;
          case url +"projet-1":
            wheelRouter('projet-2', '');
            break;
          case url +"projet-2":
             wheelRouter('projet-3', 'projet-1');
            break;
          case url +"projet-3":
            wheelRouter('projet-4', 'projet-2');
            break;
          case url +"projet-4":
            wheelRouter('contact', 'projet-3');
            break;
          case url +"contact":
            if(e.wheelDeltaY > 0){
              setTimeout(()=>{
                history.push('projet-4')
              }, 500);
            }  
            break;
          default:
          console.log(`t'inquiete, tout est sous controle !...`);
        }
      };

      window.addEventListener('wheel', handleScrollToElement) 
    }, [history]);

   return (
     <AnimatePresence>
     <Switch location={location} key={location.pathname}>
       <Route exact path="/" component={Home}/>
       <Route exact path="/projet-1" component={Project1} />
       <Route exact path="/projet-2" component={Project2} />
       <Route exact path="/projet-3" component={Project3} />
       <Route exact path="/projet-4" component={Project4} />
       <Route exact path="/contact" component={Contact} />
       <Redirect to="/" /> 
     </Switch>
     </AnimatePresence>
   )
 }
 
 export default App;
 