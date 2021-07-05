import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Weapon, Element, Archetype, Frame } from "../models/Weapon";
import * as defaultWeaponList from '../utils/defaultWeaponList.json';

const weaponList: Weapon[] = Object.values(defaultWeaponList) as Weapon[] || [];

export interface FilterOptions {
  element?: Element;
  type?: Archetype;
  frame?: Frame;

}


@Injectable()
export class WeaponProvider {
  constructor() {}

  public getWeapons(opts: FilterOptions): Weapon[] {
    let filteredWeaponList = weaponList;
    if(opts.element)
      filteredWeaponList = filteredWeaponList.filter(isElem => isElem.element === opts.element)
    if(opts.type)
      filteredWeaponList = filteredWeaponList.filter(isType => isType.type === opts.type)
    if(opts.frame)
      filteredWeaponList = filteredWeaponList.filter(isFrame => isFrame.frame === opts.frame)

    return filteredWeaponList;
  }
  

  // arrays always have a find function built in. The find function takes a function as a param, 
  //where the param of the function is the current value in the array
  public getWeapon(id: string): Weapon {
    const weapon = weaponList.find(weapon => weapon.id === id);
    if(!weapon) {
      throw new NotFoundException('Weapon not found!');
    }
    return weapon;

  }
  public createWeapon(userWeapon: Weapon): void{
    if(weaponList.find(weapon => weapon.id === userWeapon.id))
      throw new ConflictException('Weapon already exists!');
    weaponList.push(userWeapon);
  }  
  public deleteWeapon(id: string): void{
    const weapon = weaponList.find(weapon => weapon.id === id);
    if(!weapon) {
      throw new NotFoundException('Weapon not found!');
    }
    for(let i = 0; i < weaponList.length; i++){
      if(weaponList[i].id === id){
        weaponList.splice(i, 1);
        return;  
      }
    }
  }
  public changeMasterwork(userWeapon: Weapon): Weapon{
    const weapon = weaponList.find(weapon => weapon.id === userWeapon.id)
    if(!weapon)
      throw new NotFoundException('Weapon not found!');

    if(userWeapon.masterworkLevel > 10)
      throw new ConflictException('Masterwork can not be greater than 10');

    if(userWeapon.masterworkLevel < 0)
      throw new ConflictException('Masterwork can not be less than 0');
    
    const weaponIndex = weaponList.findIndex((weapon => weapon.id === userWeapon.id));
    weaponList[weaponIndex].masterworkLevel = userWeapon.masterworkLevel;
    return weaponList[weaponIndex];
    }
}    
