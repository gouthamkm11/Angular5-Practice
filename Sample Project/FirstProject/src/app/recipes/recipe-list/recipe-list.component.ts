import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe("Test Recipe", "Yummy Tummy","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg" ),
  ];

  constructor() { }

  ngOnInit() {
  }

}
