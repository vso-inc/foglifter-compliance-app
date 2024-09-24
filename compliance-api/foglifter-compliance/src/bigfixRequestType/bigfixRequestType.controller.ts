import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BigfixRequestTypeService } from "./bigfixRequestType.service";
import { BigfixRequestTypeControllerBase } from "./base/bigfixRequestType.controller.base";

@swagger.ApiTags("bigfixRequestTypes")
@common.Controller("bigfixRequestTypes")
export class BigfixRequestTypeController extends BigfixRequestTypeControllerBase {
  constructor(
    protected readonly service: BigfixRequestTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
