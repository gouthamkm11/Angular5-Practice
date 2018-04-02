export class Recipe{
    public name: string;
    public description: string;
    public imageurl: string;

    constructor(name:string,desc:string,img:string){
        this.name = name;
        this.description = desc;
        this.imageurl = img;
    }
}