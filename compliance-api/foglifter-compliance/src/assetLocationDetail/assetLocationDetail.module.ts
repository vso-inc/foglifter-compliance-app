import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetLocationDetailModuleBase } from "./base/assetLocationDetail.module.base";
import { AssetLocationDetailService } from "./assetLocationDetail.service";
import { AssetLocationDetailController } from "./assetLocationDetail.controller";
import { AssetLocationDetailResolver } from "./assetLocationDetail.resolver";

@Module({
  imports: [AssetLocationDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetLocationDetailController],
  providers: [AssetLocationDetailService, AssetLocationDetailResolver],
  exports: [AssetLocationDetailService],
})
export class AssetLocationDetailModule {}
