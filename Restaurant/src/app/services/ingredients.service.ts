import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredients.model";

export class IngredientsService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    
    private ingredients: Ingredient[]=[
        new Ingredient('papas', 5),
        new Ingredient('chiles', 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deletedIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(auxIngredients: Ingredient[]){
        for (const i of auxIngredients){
            const nameFound = this.ingredients.find( Ingredient => Ingredient.name === i.name);
            if (nameFound === undefined){
                this.ingredients.push(i);
            }else{
                nameFound.amount = nameFound.amount + i.amount;
            }
        }

        this.ingredientsChanged.next(this.ingredients.slice());

    }
}