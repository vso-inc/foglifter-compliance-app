import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubMgmtChangeLogService } from "./subMgmtChangeLog.service";
import { SubMgmtChangeLogControllerBase } from "./base/subMgmtChangeLog.controller.base";

@swagger.ApiTags("subMgmtChangeLogs")
@common.Controller("subMgmtChangeLogs")
export class SubMgmtChangeLogController extends SubMgmtChangeLogControllerBase {
  constructor(
    protected readonly service: SubMgmtChangeLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
