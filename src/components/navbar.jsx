import React, {Component} from "react";

class NavBar extends Component{
    render(){
       return(<nav className="navbar navbar-dark bg-dark">
       <div class="container">
           <div class="navbar-header">
               <a className="navbar-brand" href="#">Counter Navbar</a>
           </div>
       </div>
       </nav> );
    }
}

export default NavBar;