import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: "./counter.component.html",
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() data:{name:string,price:number,count}[];

  equalDatas=[];
  constructor() {

  }
  @Output() deletedElement:EventEmitter<{name,price}> = new EventEmitter();
  

  onClickDelete(element) {
   this.deletedElement.emit(element)

  }
  //  same(data) {
  //   this.equalDatas.push(this.data)
  //  console.log(this.equalDatas)
  
  //  }
  ngOnInit() {
   // this.same(this.data)
  }

}
