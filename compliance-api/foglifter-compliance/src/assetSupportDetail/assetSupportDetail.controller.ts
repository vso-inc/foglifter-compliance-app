import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetSupportDetailService } from "./assetSupportDetail.service";
import { AssetSupportDetailControllerBase } from "./base/assetSupportDetail.controller.base";

@swagger.ApiTags("assetSupportDetails")
@common.Controller("assetSupportDetails")
export class AssetSupportDetailController extends AssetSupportDetailControllerBase {
  constructor(
    protected readonly service: AssetSupportDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
