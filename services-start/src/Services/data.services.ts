import { loggingService } from 'Services/logging.services';
import { Injectable } from '@angular/core';

@Injectable()
export class accountData {
    constructor(private logService:loggingService){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      
      addAccount(name:string,status:string){
          this.accounts.push({name: name, status: status});
          this.logService.accountAdded(name);
      }

      updateAccount(id:number, newStatus:string){
          this.accounts[id].status = newStatus;
          this.logService.statusChanged(newStatus);
      }
}