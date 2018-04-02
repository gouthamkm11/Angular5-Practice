import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object1 = {
    name:'Number 1',
    type:'server',
    content:'Accessing other components property'
  }
  serverElements:[{type:string,name:string,content:string}] = [this.object1];

  onServerAdded(details: {sname:string, scontent:string}) {
    this.serverElements.push({
      type: 'server',
      name: details.sname,
      content: details.scontent
    });
  }

  onBlueprintAdded(details: {sname:string, scontent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: details.sname,
      content: details.scontent
    });
  }

}
