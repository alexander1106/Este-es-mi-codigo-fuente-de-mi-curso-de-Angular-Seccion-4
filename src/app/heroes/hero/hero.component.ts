import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iroman'; 
  public age:number  = 45; 

  get capitalaizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescriotion():string{
    return `${this.name} - ${this.age}`   
  }

  chagenHero():void{
    this.name = 'Spiderman';
  }

  chagenAge():void{
    this.age =24;
  }

  resetForm():void{
    this.name='Iroman'; 
    this.age = 45;
  }
}
