import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component<{},{}>{
render(){
    return(
        <div>
        <NavLink to= "/"> Home</NavLink>
        <NavLink to="/ShowRecipe">Show Recipe</NavLink>
        </div>
    )

}
}
