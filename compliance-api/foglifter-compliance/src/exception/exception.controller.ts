import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExceptionService } from "./exception.service";
import { ExceptionControllerBase } from "./base/exception.controller.base";

@swagger.ApiTags("exceptions")
@common.Controller("exceptions")
export class ExceptionController extends ExceptionControllerBase {
  constructor(
    protected readonly service: ExceptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
