import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationLifecycleDetailService } from "./applicationLifecycleDetail.service";
import { ApplicationLifecycleDetailControllerBase } from "./base/applicationLifecycleDetail.controller.base";

@swagger.ApiTags("applicationLifecycleDetails")
@common.Controller("applicationLifecycleDetails")
export class ApplicationLifecycleDetailController extends ApplicationLifecycleDetailControllerBase {
  constructor(
    protected readonly service: ApplicationLifecycleDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
