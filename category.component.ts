import { Component, OnInit } from '@angular/core';
import { SearchPipe } from '../search.pipe';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  records: Array<any>;
  isDesc: boolean = false;
  column: string = 'CategoryName';

  direction: number;
  constructor() { }

  ngOnInit() {
    this.records= [
      { CategoryID: 1,  CategoryName: "Beverages", Description: "Coffees, teas" },
      { CategoryID: 2,  CategoryName: "Condiments", Description: "Sweet and savory sauces" },
      { CategoryID: 3,  CategoryName: "Confections", Description: "Desserts and candies" },
      { CategoryID: 4,  CategoryName: "Cheeses",  Description: "Smetana, Quark and Cheddar Cheese" },
      { CategoryID: 5,  CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" },
      { CategoryID: 6,  CategoryName: "Beverages", Description: "Beers, and ales" },
      { CategoryID: 7,  CategoryName: "Condiments", Description: "Selishes, spreads, and seasonings" },
      { CategoryID: 8,  CategoryName: "Confections", Description: "Sweet breads" },
      { CategoryID: 9,  CategoryName: "Cheeses",  Description: "Cheese Burger" },
      { CategoryID: 10, CategoryName: "Grains/Cereals", Description: "Breads, crackers, pasta, and cereal" }
     ];
     // this.sort(this.column);
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
}
}

