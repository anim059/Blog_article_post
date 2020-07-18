import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import EditBlogComponent from './pages/update';
import BlogComponent from './pages/home'


function App() {
  
  return (
   
     
       
        <Router>
          <div className="container">
       
            <Switch>

               <Route path="/" exact component={BlogComponent}/>
               <Route path="/update/:id" component={EditBlogComponent}/>

            </Switch>  
           
          </div>
        </Router>  
     
  
  );
}

export default App;