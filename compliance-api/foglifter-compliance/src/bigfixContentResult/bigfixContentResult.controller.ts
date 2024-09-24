import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BigfixContentResultService } from "./bigfixContentResult.service";
import { BigfixContentResultControllerBase } from "./base/bigfixContentResult.controller.base";

@swagger.ApiTags("bigfixContentResults")
@common.Controller("bigfixContentResults")
export class BigfixContentResultController extends BigfixContentResultControllerBase {
  constructor(
    protected readonly service: BigfixContentResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
