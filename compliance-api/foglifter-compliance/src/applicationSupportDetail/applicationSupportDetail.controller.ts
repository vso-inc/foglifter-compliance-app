import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationSupportDetailService } from "./applicationSupportDetail.service";
import { ApplicationSupportDetailControllerBase } from "./base/applicationSupportDetail.controller.base";

@swagger.ApiTags("applicationSupportDetails")
@common.Controller("applicationSupportDetails")
export class ApplicationSupportDetailController extends ApplicationSupportDetailControllerBase {
  constructor(
    protected readonly service: ApplicationSupportDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
