import { Recipes } from "../recipes/Recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ingridientsService } from "./ingredients.service";


@Injectable()//
export class RecipeService {

    recipeSelected = new EventEmitter<Recipes>();

    private recipes: Recipes[] = [
        new Recipes('Hamburguesa', 'This is a simply test', 'https://www.recetas360.com/wp-content/uploads/2018/01/HAMBURGUESAS-DE-CARNE.jpg',
            [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ]
        ),
        new Recipes('Tacos', 'This is a simply test', 'https://tastesbetterfromscratch.com/wp-content/uploads/2018/02/Instant-Pot-Lentil-Tacos-4-500x500.jpg', [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ]),
        
        new Recipes('Pizza', 'This is a simply test', 'http://www.reynoldskitchens.com/sites/default/files/styles/hero_image/public/recipes/2.500x500_Greekpizza.jpg?itok=nABAfQrF', [ 
            new Ingredient('orange',2),
            new Ingredient('apple',2)
            ])
    ];
    constructor(private ingredientsService: ingridientsService){

    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
    }
}