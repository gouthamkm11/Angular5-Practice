import { Directive, OnInit, ElementRef, Renderer2, HostListener, Host, HostBinding } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})
export class Highlight implements OnInit {
    constructor(private ElementRef:ElementRef, private renderer:Renderer2){
    }

    ngOnInit(){
        this.renderer.setStyle(this.ElementRef.nativeElement,'backgroundColor','yellow');
    }


    @HostBinding('style.backgroundColor') bgColor:string = 'transparent';

    @HostListener('mouseenter') onMouseover(){
        // this.renderer.setStyle(this.ElementRef.nativeElement,'backgroundColor','blue');
        this.bgColor = 'blue';
    }

    @HostListener('mouseleave') onMouseexit(){
        // this.renderer.setStyle(this.ElementRef.nativeElement,'backgroundColor','transparent');
        this.bgColor='transparent';
    }

    @HostListener('click') onMouseclick(){
        // this.renderer.setStyle(this.ElementRef.nativeElement,'backgroundColor','red');
        this.bgColor='red';
    }
}