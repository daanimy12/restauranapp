import { Recipes } from "../recipes/Recipes.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";



export class RecipeService {

    recipeSelected = new EventEmitter<Recipes>();

    private recipes: Recipes[] = [
        new Recipes('Hamburguesa', 'This is a simply test', 'https://www.dondeir.com/wp-content/uploads/2017/05/burgers-war-convoy-guerra-hamburguesas-en-la-roma-05.jpg',
            [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ]
        ),
        new Recipes('Tacos', 'This is a simply test', 'https://cocina-casera.com/mx/wp-content/uploads/2017/09/taco-de-carne.jpg', [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ]),
        
        new Recipes('Bebidas', 'This is a simply test', 'https://www.laespanolaaceites.com/blog/wp-content/uploads/2017/08/Bebidas-verano-general.jpg', [ 
            new Ingredient('bread',2),
            new Ingredient('apple',2)
            ])
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}