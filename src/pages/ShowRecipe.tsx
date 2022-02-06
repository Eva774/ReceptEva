import React, { useState, useEffect } from "react";
import { recipesRef } from "../components/firebase";
import { child,onValue,get } from 'firebase/database';


type ShowRecipeState = {
  recipeName: string;
  recipeIngredients: [];
  recipeSteps: [];
}

export default class ShowRecipe extends React.Component <{},ShowRecipeState> {

  state: ShowRecipeState = {
    recipeName: "",
    recipeIngredients: [],
    recipeSteps: [],
  }


render(){


get(child(recipesRef,'test')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    this.setState({recipeName: snapshot.val()["name"],
                  recipeIngredients: snapshot.val()["ingredients"],
                  recipeSteps: snapshot.val()["steps"]})
    console.log(this.state.recipeName)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

  return (
    
    <div className="App">
      <h2>Naam</h2>
        <p>
          {this.state.recipeName}
        </p>
        <h2>Ingrediënten</h2>
        {this.state.recipeIngredients.map((ingredient, index)=> <p>{ingredient}</p>)}
        <h2>Stappen</h2>
        {this.state.recipeSteps.map((step,index)=> <p>{step}</p>)}
    </div>
  );
  }
}
