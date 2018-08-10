import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {


  recipes: Recipe[] = [
    new Recipe
  ('A test Recipe', 'this is e simly',
  'http://darsourantanger.com/wp-content/uploads/2017/05/dar-souran-' +
    'cuisine-marocaine-gastronomie-marocaine-tajine-au-poulet-700x400.jpg'),
    new Recipe
  ('A test Recipe', 'this is e simly',
  'https://images.ricardocuisine.com/services/recipes/500x675_pizza-1498148703.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
