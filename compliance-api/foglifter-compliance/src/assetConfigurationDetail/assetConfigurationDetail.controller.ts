import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetConfigurationDetailService } from "./assetConfigurationDetail.service";
import { AssetConfigurationDetailControllerBase } from "./base/assetConfigurationDetail.controller.base";

@swagger.ApiTags("assetConfigurationDetails")
@common.Controller("assetConfigurationDetails")
export class AssetConfigurationDetailController extends AssetConfigurationDetailControllerBase {
  constructor(
    protected readonly service: AssetConfigurationDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
