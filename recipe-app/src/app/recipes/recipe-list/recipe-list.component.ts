import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'),
    new Recipe('Second Recipe', 'Second description', 'https://thedefineddish.com/wp-content/uploads/2019/12/2019-12-28-22.37.12.jpg'),
    new Recipe('Third Recipe', 'Third description', 'https://pbs.twimg.com/profile_images/1093186805283749890/4yb0033d.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
