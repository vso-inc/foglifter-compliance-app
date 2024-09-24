import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TssChangeLogService } from "./tssChangeLog.service";
import { TssChangeLogControllerBase } from "./base/tssChangeLog.controller.base";

@swagger.ApiTags("tssChangeLogs")
@common.Controller("tssChangeLogs")
export class TssChangeLogController extends TssChangeLogControllerBase {
  constructor(
    protected readonly service: TssChangeLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
