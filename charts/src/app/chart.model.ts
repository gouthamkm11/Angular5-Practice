export class chartModel{
    public date:string;
    public open:string;
    public high:string;
    public low:string;
    public close:string;
    public volume:string;
    public unadjustedVolume:string;
    public change:string;
    public changePercentage:string;
    public vwap:string;
    public label:string;
    public changeOverTime:string;
    constructor(date,open,high,low,close,volume,unadjustedVolume,change,changePercentage,vwap,label,changeOverTime){
        this.date = date;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
        this.unadjustedVolume = unadjustedVolume;
        this.change = change;
        this.changePercentage = changePercentage;
        this.vwap = vwap;
        this.label = label;
        this.changeOverTime = changeOverTime;
    }
}