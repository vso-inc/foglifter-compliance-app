import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ConfigModelModuleBase } from "./base/configModel.module.base";
import { ConfigModelService } from "./configModel.service";
import { ConfigModelController } from "./configModel.controller";
import { ConfigModelResolver } from "./configModel.resolver";

@Module({
  imports: [ConfigModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ConfigModelController],
  providers: [ConfigModelService, ConfigModelResolver],
  exports: [ConfigModelService],
})
export class ConfigModelModule {}
