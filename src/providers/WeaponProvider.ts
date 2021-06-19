import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Weapon } from "../models/Weapon";
import * as defaultWeaponList from '../utils/defaultWeaponList.json';

const weaponList: Weapon[] = Object.values(defaultWeaponList) as Weapon[] || [];

@Injectable()
export class WeaponProvider {
  constructor() {}

  public getWeapons(): Weapon[] {
    return weaponList;
  }

  // arrays always have a find function built in. The find function takes a function as a param, where the param of the function is the current value in the array
  public getWeapon(id: string): Weapon {
    const weapon = weaponList.find(weapon => weapon.id === id);
    if (!weapon) {
      throw new NotFoundException('Weapon not found!');
    }
    return weapon;

  }

  public createWeapon(userWeapon: Weapon): void{
    if(weaponList.find(weapon => weapon.id === userWeapon.id))
      throw new ConflictException('Weapon already exists!');
    weaponList.push(userWeapon);
  }  
}
