import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationDeploymentService } from "./applicationDeployment.service";
import { ApplicationDeploymentControllerBase } from "./base/applicationDeployment.controller.base";

@swagger.ApiTags("applicationDeployments")
@common.Controller("applicationDeployments")
export class ApplicationDeploymentController extends ApplicationDeploymentControllerBase {
  constructor(
    protected readonly service: ApplicationDeploymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
