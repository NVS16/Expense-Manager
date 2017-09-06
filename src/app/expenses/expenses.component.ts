import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  
  cat: boolean = false;
  exp: boolean = false;
  show: boolean = true;
  categories: any[];
  categoryPost = {
    name: "",
    limit: 0
  };
  expensePost = {
    name: "",
    cat: "",
    amt: 0,
    meth: ""
  };
  payMeth: String[] = ["Cash", "Debit Card", "Credit Card", "E-Wallet", "Net Banking"];

  newCat(){
    if(!this.cat) {
      this.cat = true;
      this.exp = false;
      this.show = false;
    }
  } 

  viewExp(){
    if(!this.show) {
      this.cat = false;
      this.exp = false;
      this.show = true;
    }

  }

  newExp(){
    if(!this.exp) {
      this.cat = false;
      this.exp = true;
      this.show = false;
    }
  }

  newCatSubmit(){
    this.categoryService.postCat(this.categoryPost).subscribe((data) => { console.log(data) })
    location.reload();
  }

  newExpSubmit() {
    console.log(this.expensePost);
    this.categoryService.postExp(this.expensePost).subscribe((data) => console.log(data));
    location.reload();
  }

  constructor(private categoryService: CategoryService){}

  ngOnInit() {
    this.categoryService.fetchData().subscribe((data) => { this.categories = JSON.parse(data["_body"]) });
  }

}
