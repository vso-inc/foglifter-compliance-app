import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TssChangeLogStatusService } from "./tssChangeLogStatus.service";
import { TssChangeLogStatusControllerBase } from "./base/tssChangeLogStatus.controller.base";

@swagger.ApiTags("tssChangeLogStatuses")
@common.Controller("tssChangeLogStatuses")
export class TssChangeLogStatusController extends TssChangeLogStatusControllerBase {
  constructor(
    protected readonly service: TssChangeLogStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
