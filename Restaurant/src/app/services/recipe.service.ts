import { Recipe } from "../recipes/recipes.model";
import { EventEmitter,Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { IngredientsService } from "./Ingredients.service";

@Injectable()
export class RecipeService{
    //recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('Tacos',
        'tacos especiales',
        'https://cocina-casera.com/mx/wp-content/uploads/2017/09/taco-de-carne.jpg',
        [new Ingredient('breack',2), 
        new Ingredient('cheese',4)]),
        
        new Recipe('hamburgesa','hamburgesa pequeña',
        'https://www.recetas360.com/wp-content/uploads/2018/01/HAMBURGUESAS-DE-CARNE.jpg',
        [new Ingredient('breack',2), new Ingredient('Tomate',4), new Ingredient('Peperoni',5)])  
      ];
      getRecipes(){
          return this.recipes.slice();
      }
      constructor(private ingredientsService: IngredientsService){

      }
      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
      }

    

}