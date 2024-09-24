import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MaintenanceWindowService } from "./maintenanceWindow.service";
import { MaintenanceWindowControllerBase } from "./base/maintenanceWindow.controller.base";

@swagger.ApiTags("maintenanceWindows")
@common.Controller("maintenanceWindows")
export class MaintenanceWindowController extends MaintenanceWindowControllerBase {
  constructor(
    protected readonly service: MaintenanceWindowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
