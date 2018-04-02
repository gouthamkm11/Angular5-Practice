import { Component, OnInit } from '@angular/core';
import { accountData } from 'Services/data.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  account:{name:string, status:string}[] = [];
  constructor(private dataService:accountData){}
  ngOnInit(){
    this.account = this.dataService.accounts;
  }
}
