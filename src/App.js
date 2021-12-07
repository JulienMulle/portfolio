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
                history.push('Weather-app')
              }, 500);     
          }
            break;
          case url +"Weather-app":
            wheelRouter('Porfolio', '');
            break;
          case url +"Porfolio":
             wheelRouter('MovieSearch', 'Weather-app');
            break;
          case url +"MovieSearch":
            wheelRouter('AppRecipes', 'Porfolio');
            break;
          case url +"AppRecipes":
            wheelRouter('Contact', 'MovieSearch');
            break;
          case url +"Contact":
            if(e.wheelDeltaY > 0){
              setTimeout(()=>{
                history.push('AppRecipes')
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
       <Route exact path="/Weather-app" component={Project1} />
       <Route exact path="/Porfolio" component={Project2} />
       <Route exact path="/MovieSearch" component={Project3} />
       <Route exact path="/AppRecipes" component={Project4} />
       <Route exact path="/Contact" component={Contact} />
       <Redirect to="/" /> 
     </Switch>
     </AnimatePresence>
   )
 }
 
 export default App;
 