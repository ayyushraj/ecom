import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Store from '../Pages/store'
import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import CreatePost from '../Pages/CreatePost'
import ViewPost from '../Pages/ViewPost'
import ViewMore from '../Pages/ViewMore'




function MainRoutes() {
    return (
       <Router>
           <Route exact path="/">
               <Store/>
           </Route>
           <Route path="/signup">
               <Signup/>
           </Route>
           <Route path="/login">
               <Login/>
           </Route>
           <Route path="/create">
               <CreatePost/>
           </Route>
           <Route path="/view">
               <ViewPost/>
           </Route>
           <Route path="/viewmore">
               <ViewMore/>
           </Route>
         
           

           
       </Router>
    )
}

export default MainRoutes
