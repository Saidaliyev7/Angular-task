import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  template:`

  <p> {{numbers}}</p>
  `,
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
   @Input() numbers:number;
   
  constructor() { }

  ngOnInit() {
  }

}
