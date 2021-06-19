import { Module } from "@nestjs/common";
import { WeaponController } from "./controllers/WeaponController";
import { WeaponProvider } from "./providers/WeaponProvider";

@Module({
  controllers: [WeaponController],
  providers: [WeaponProvider]
})
export class AppModule {}