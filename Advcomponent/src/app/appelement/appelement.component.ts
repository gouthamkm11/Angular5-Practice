import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appelement',
  templateUrl: './appelement.component.html',
  styleUrls: ['./appelement.component.css']
})
export class AppelementComponent implements OnInit {
  @Input() element: {
    name:string,
    type:string,
    content:string
  }
  constructor() { }

  ngOnInit() {
  }
 
}
