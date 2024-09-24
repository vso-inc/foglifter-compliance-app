import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssetSupportVendorService } from "./assetSupportVendor.service";
import { AssetSupportVendorControllerBase } from "./base/assetSupportVendor.controller.base";

@swagger.ApiTags("assetSupportVendors")
@common.Controller("assetSupportVendors")
export class AssetSupportVendorController extends AssetSupportVendorControllerBase {
  constructor(
    protected readonly service: AssetSupportVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
