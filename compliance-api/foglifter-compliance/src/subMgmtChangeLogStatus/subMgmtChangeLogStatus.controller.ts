import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubMgmtChangeLogStatusService } from "./subMgmtChangeLogStatus.service";
import { SubMgmtChangeLogStatusControllerBase } from "./base/subMgmtChangeLogStatus.controller.base";

@swagger.ApiTags("subMgmtChangeLogStatuses")
@common.Controller("subMgmtChangeLogStatuses")
export class SubMgmtChangeLogStatusController extends SubMgmtChangeLogStatusControllerBase {
  constructor(
    protected readonly service: SubMgmtChangeLogStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
