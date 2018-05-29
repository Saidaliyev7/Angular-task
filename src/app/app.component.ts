import { Component, OnInit } from '@angular/core';
import { InputsComponent } from './inputs/inputs.component'
import { TotalComponent } from './total/total.component'
import { CounterComponent } from './counter/counter.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  appItems: { name: string, price: number }[] = [];
  data = [];
  withoutDublicate = [];
  total: number = 0;
  count: number=0;
  constructor() {

  }
  ngOnInit() {
    
    this.data = Array.from(new Set(this.appItems));
    
  }

  onChange(item) {
    //   console.log(item)
    item.count+=1
   
   
    if (this.appItems != this.data) {
      this.appItems.push(item);
      this.total += item.price;

      // console.log(withoutDuplicates)

      this.data = Array.from(new Set(this.appItems));
      console.log(this.data)
    }
    //  console.log(this.appItems)
  }
  
  deleteSelected(element) {
    let index = this.data.indexOf(element);
    
if(element.count>1) {
  element.count-=1;
  this.total -= element.price;
  this.appItems.splice(index, 1)
} else {
  this.data.splice(index, 1)
  this.appItems.splice(index, 1)
  this.total -= element.price;
  element.count=0;
}
 



  }
}