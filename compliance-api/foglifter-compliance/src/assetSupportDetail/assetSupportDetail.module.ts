import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetSupportDetailModuleBase } from "./base/assetSupportDetail.module.base";
import { AssetSupportDetailService } from "./assetSupportDetail.service";
import { AssetSupportDetailController } from "./assetSupportDetail.controller";
import { AssetSupportDetailResolver } from "./assetSupportDetail.resolver";

@Module({
  imports: [AssetSupportDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetSupportDetailController],
  providers: [AssetSupportDetailService, AssetSupportDetailResolver],
  exports: [AssetSupportDetailService],
})
export class AssetSupportDetailModule {}
