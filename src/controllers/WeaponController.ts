import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Weapon } from "../models/Weapon";
import { WeaponProvider } from "../providers/WeaponProvider";

@Controller('/weapons') // http://localhost:port/weapons
export class WeaponController {
  constructor(private weaponProvider: WeaponProvider) {}

  @Get(':id') // whole path: GET /weapons/:id
  public getWeapon(@Param('id') id: string): Weapon {
    return this.weaponProvider.getWeapon(id);
  }
  
  @Post('')
  public createWeapon(@Body() weapon: Weapon): Weapon {
    this.weaponProvider.createWeapon(weapon);
    return weapon;
  }
}
