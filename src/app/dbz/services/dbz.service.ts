import { Injectable } from '@angular/core';
import { Character } from '../interface/character-interface';
import { v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'} //es
  )
export class DbzService {
  public characters:Character[]=[  {
    id: uuid(),
    name: 'Krilin',
    power:1000,
  },{
    id: uuid(),
    name:'Goku',
    power:10000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power:29939
  }
  ];
  addCharacter(character:Character):void{
    const newCharacter ={id:uuid(), ...character}

    this.characters.push(newCharacter)
  }

  //onDeleteCharacter(index:number):void{
    //this.characters.splice(index,1)}

  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id != id)
  }

}
