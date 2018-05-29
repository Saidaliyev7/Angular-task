import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl:'./inputs.component.html' ,
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {


  items:{name:string,price:number,count:number}[] = [{name:"item-1",price:10,count:0},{name:"item-2",price:20,count:0},{name:"item-3",price:30,count:0}]

  @Output() selected : EventEmitter<{name,price}> = new EventEmitter();



  onClick(item:{name,price,count}) {
    //console.log(item); 
    
    this.selected.emit(item);


  }


  constructor() {
  }

  ngOnInit() {
  }

}
