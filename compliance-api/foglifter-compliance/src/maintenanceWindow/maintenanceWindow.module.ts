import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MaintenanceWindowModuleBase } from "./base/maintenanceWindow.module.base";
import { MaintenanceWindowService } from "./maintenanceWindow.service";
import { MaintenanceWindowController } from "./maintenanceWindow.controller";
import { MaintenanceWindowResolver } from "./maintenanceWindow.resolver";

@Module({
  imports: [MaintenanceWindowModuleBase, forwardRef(() => AuthModule)],
  controllers: [MaintenanceWindowController],
  providers: [MaintenanceWindowService, MaintenanceWindowResolver],
  exports: [MaintenanceWindowService],
})
export class MaintenanceWindowModule {}
