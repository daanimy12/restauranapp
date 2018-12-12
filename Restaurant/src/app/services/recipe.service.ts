import { Recipe } from "../recipes/recipes.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";
import { IngredientsService } from "./Ingredients.service";
import { Subject } from "rxjs";

@Injectable()
export class
  RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();

  RecipeEmit = new Subject<Recipe[]>();
  RecipeEditing = new Subject<number>();
  private recipes: Recipe[] = [
    new Recipe('Tacos',
      'tacos especiales',
      'https://cocina-casera.com/mx/wp-content/uploads/2017/09/taco-de-carne.jpg',
      [new Ingredients('breack', 2),
      new Ingredients('cheese', 4)]),

    new Recipe('hamburgesa', 'hamburgesa pequeña',
      'https://www.recetas360.com/wp-content/uploads/2018/01/HAMBURGUESAS-DE-CARNE.jpg',
      [new Ingredients('breack', 2), new Ingredients('Tomate', 4), new Ingredients('Peperoni', 5)])
  ];
  getRecipes() {
    return this.recipes.slice();
  }
  constructor(private ingredientsService: IngredientsService) {

  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.ingredientsService.addIngredients(ingredients);
  }
  DeleteRecipe(){
    
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.RecipeEmit.next(this.recipes.slice());
  }
  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.RecipeEmit.next(this.recipes.slice());
  }

}