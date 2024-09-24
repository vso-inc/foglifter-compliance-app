import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DatasourceDeviceService } from "./datasourceDevice.service";
import { DatasourceDeviceControllerBase } from "./base/datasourceDevice.controller.base";

@swagger.ApiTags("datasourceDevices")
@common.Controller("datasourceDevices")
export class DatasourceDeviceController extends DatasourceDeviceControllerBase {
  constructor(
    protected readonly service: DatasourceDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
