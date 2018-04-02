import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/facade/async';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit() {
  }

  @Output()serverAdd = new EventEmitter<{sname:string,scontent:string}>();
  @Output() blueprintAdd = new EventEmitter<{sname:string,scontent:string}>();

  onAddServer(){
    this.serverAdd.emit({sname:this.newServerName, scontent:this.newServerContent});
  }
  onAddBlueprint(){
    this.blueprintAdd.emit({sname:this.newServerName, scontent:this.newServerContent});
  }
  
}
