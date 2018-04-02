import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { chartModel } from '../app/chart.model';
import 'rxjs/add/operator/map'
@Injectable()
export class routingService{

    constructor(private _httpClient:HttpClient){}

    getStock(){
        return this._httpClient.get('https://api.iextrading.com/1.0/stock/msft/chart')
        .map(res => res);
    }
}