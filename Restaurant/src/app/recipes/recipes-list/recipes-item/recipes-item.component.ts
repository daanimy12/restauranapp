import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipes } from '../../Recipes.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe: Recipes;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);

  }
}