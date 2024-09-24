import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetNetworkDetailModuleBase } from "./base/assetNetworkDetail.module.base";
import { AssetNetworkDetailService } from "./assetNetworkDetail.service";
import { AssetNetworkDetailController } from "./assetNetworkDetail.controller";
import { AssetNetworkDetailResolver } from "./assetNetworkDetail.resolver";

@Module({
  imports: [AssetNetworkDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetNetworkDetailController],
  providers: [AssetNetworkDetailService, AssetNetworkDetailResolver],
  exports: [AssetNetworkDetailService],
})
export class AssetNetworkDetailModule {}
