import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class IngredientsService{
    //Cambiarlo a un Subject
   // ingredientEmit = new EventEmitter<Ingredient[]>();
   ingredientEmit = new Subject<Ingredients[]>();
    startedEditing =  new Subject<number>();
    private ingredients: Ingredients[]=[
        new Ingredients('Tomate', 5),
        new Ingredients('Apples',3),
    ];

    getIngredient(index : number){
        return this.ingredients[index];
    }
    getIngredientes(){
        return this.ingredients.slice();
    }
    updateIngredient(index: number, ingredient: Ingredients){
        this.ingredients[index]=ingredient;
        this.ingredientEmit.next(this.ingredients.slice());
    }
    addIngredient(ingredient : Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientEmit.next(this.ingredients.slice());
    }
    addIngredients(auxIngredients: Ingredients[]){
        
        for(const i of auxIngredients){
            var NombreMA = this.ingredients.find((x, index)=>{
               if( x.name == i.name ){
                    this.ingredients[index].amount = this.ingredients[index].amount + i.amount;
                    return true;
               }else{
                   
                   return false;
               }
         
            });
            
            if(NombreMA != null){
              
            }else{
                this.ingredients.push(i);
            }
            this.ingredientEmit.next(this.ingredients.slice());
            
        }
    }
    DeleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientEmit.next(this.ingredients.slice());
    }
   
}