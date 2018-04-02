import { Component, EventEmitter, Output } from '@angular/core';
import { loggingService } from '../../Services/logging.services'
import { accountData } from  '../../Services/data.services'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[loggingService]
})
export class NewAccountComponent {
  
  constructor(private logService:loggingService, private dataService:accountData){
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.dataService.addAccount(accountName,accountStatus);
    this.logService.statusChanged(accountStatus);
  }


}
