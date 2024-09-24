import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssetConfigurationDetailModuleBase } from "./base/assetConfigurationDetail.module.base";
import { AssetConfigurationDetailService } from "./assetConfigurationDetail.service";
import { AssetConfigurationDetailController } from "./assetConfigurationDetail.controller";
import { AssetConfigurationDetailResolver } from "./assetConfigurationDetail.resolver";

@Module({
  imports: [AssetConfigurationDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssetConfigurationDetailController],
  providers: [
    AssetConfigurationDetailService,
    AssetConfigurationDetailResolver,
  ],
  exports: [AssetConfigurationDetailService],
})
export class AssetConfigurationDetailModule {}
