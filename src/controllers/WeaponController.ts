import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { Weapon, Element, Archetype, Frame } from "../models/Weapon";
import { WeaponProvider, FilterOptions  } from "../providers/WeaponProvider";

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

  @Get('') //GET /
  public getAllWeapons(@Query('element') element: Element, @Query('type') type: Archetype, @Query('frame') frame: Frame) :Weapon[] {
    const opts: FilterOptions = {
      element,
      type,
      frame
    };
    const weaponArray = this.weaponProvider.getWeapons(opts);
    return weaponArray;
  }

  @Delete(':id')
  public deleteWeapon(@Param('id') id: string): void{
    this.weaponProvider.deleteWeapon(id);
  }
}

 