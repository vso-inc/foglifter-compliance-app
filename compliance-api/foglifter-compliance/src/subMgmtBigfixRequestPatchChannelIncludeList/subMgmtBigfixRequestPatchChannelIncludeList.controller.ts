import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubMgmtBigfixRequestPatchChannelIncludeListService } from "./subMgmtBigfixRequestPatchChannelIncludeList.service";
import { SubMgmtBigfixRequestPatchChannelIncludeListControllerBase } from "./base/subMgmtBigfixRequestPatchChannelIncludeList.controller.base";

@swagger.ApiTags("subMgmtBigfixRequestPatchChannelIncludeLists")
@common.Controller("subMgmtBigfixRequestPatchChannelIncludeLists")
export class SubMgmtBigfixRequestPatchChannelIncludeListController extends SubMgmtBigfixRequestPatchChannelIncludeListControllerBase {
  constructor(
    protected readonly service: SubMgmtBigfixRequestPatchChannelIncludeListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
