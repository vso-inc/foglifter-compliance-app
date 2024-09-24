import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetLocationDetailService } from "./assetLocationDetail.service";
import { AssetLocationDetailControllerBase } from "./base/assetLocationDetail.controller.base";

@swagger.ApiTags("assetLocationDetails")
@common.Controller("assetLocationDetails")
export class AssetLocationDetailController extends AssetLocationDetailControllerBase {
  constructor(
    protected readonly service: AssetLocationDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
