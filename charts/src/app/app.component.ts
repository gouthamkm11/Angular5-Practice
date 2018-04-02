import { Component, OnInit } from '@angular/core';
import { routingService } from '../Services/routing.services';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  chart = [];

  constructor(private _route:routingService){}

  ngOnInit(){
    this._route.getStock()
      .subscribe(res => {
        let result:any = [res];
        let high = result[0].map(res => res.high);
        let open = result[0].map(res => res.open);
        let low = result[0].map(res => res.low);
        let close = result[0].map(res => res.close);
        let alldates = result[0].map(res => res.date);
        
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              {
                data: high,
                borderColor: '#ff6384',
                fill: false
              },
              {
                data: low,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: open,
                borderColor: '#cc65fe',
                fill: false
              },
              {
                data: close,
                borderColor: '#ffce56',
                fill: false
              }
            ],
            options:{
              layout:{
                padding: {
                  left: 250,
                  right: 250,
                  top: 250,
                  bottom: 250
              }
              },
              legend:{
                display:true
              },
              scales: {
                xAxes: [{
                  display:true
                }],
                yAxes: [{
                  display:true
                }]
              }
            }
          }
      })
  });
}
}
