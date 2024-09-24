import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnvironmentService } from "./environment.service";
import { EnvironmentControllerBase } from "./base/environment.controller.base";

@swagger.ApiTags("environments")
@common.Controller("environments")
export class EnvironmentController extends EnvironmentControllerBase {
  constructor(
    protected readonly service: EnvironmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
