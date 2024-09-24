import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetNetworkDetailService } from "./assetNetworkDetail.service";
import { AssetNetworkDetailControllerBase } from "./base/assetNetworkDetail.controller.base";

@swagger.ApiTags("assetNetworkDetails")
@common.Controller("assetNetworkDetails")
export class AssetNetworkDetailController extends AssetNetworkDetailControllerBase {
  constructor(
    protected readonly service: AssetNetworkDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
