import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetSupportVendorModuleBase } from "./base/assetSupportVendor.module.base";
import { AssetSupportVendorService } from "./assetSupportVendor.service";
import { AssetSupportVendorController } from "./assetSupportVendor.controller";
import { AssetSupportVendorResolver } from "./assetSupportVendor.resolver";

@Module({
  imports: [AssetSupportVendorModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetSupportVendorController],
  providers: [AssetSupportVendorService, AssetSupportVendorResolver],
  exports: [AssetSupportVendorService],
})
export class AssetSupportVendorModule {}
