import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BigfixRequestService } from "./bigfixRequest.service";
import { BigfixRequestControllerBase } from "./base/bigfixRequest.controller.base";

@swagger.ApiTags("bigfixRequests")
@common.Controller("bigfixRequests")
export class BigfixRequestController extends BigfixRequestControllerBase {
  constructor(
    protected readonly service: BigfixRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
