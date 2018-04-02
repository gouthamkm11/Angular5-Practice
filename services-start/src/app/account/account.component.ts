import { Component, EventEmitter, Input, Output } from '@angular/core';
import { loggingService } from '../../Services/logging.services';
import { accountData } from '../../Services/data.services';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[loggingService]
})
export class AccountComponent {
  
  constructor(private logService:loggingService, private dataService:accountData){
  }

  
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.dataService.updateAccount(this.id,status);
    this.logService.accountAdded(status);
  }
}
