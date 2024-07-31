
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../interface/character-interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-component.html'
})

export class MainPageComponents  {
  constructor( private dbzSevice: DbzService){}
  get characters():Character[]{
    return [...this.dbzSevice.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzSevice.deleteCharacterById(id)
  }
  onNewCharacter(character:Character):void{
    this.dbzSevice.addCharacter(character);
  }

}
