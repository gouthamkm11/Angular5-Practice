export class loggingService{
    accountAdded(data:string){
        console.log('A server status changed, new status: ' +data);    
    }

    statusChanged(data: string){
        console.log('A new account is added with status: ' +data);
    }
}