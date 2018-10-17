import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../Recipes.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
@Input() recipe: Recipes;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    console.log(this.recipe.ingredients)
  }

}
