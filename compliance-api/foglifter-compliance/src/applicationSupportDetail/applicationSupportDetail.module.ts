import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationSupportDetailModuleBase } from "./base/applicationSupportDetail.module.base";
import { ApplicationSupportDetailService } from "./applicationSupportDetail.service";
import { ApplicationSupportDetailController } from "./applicationSupportDetail.controller";
import { ApplicationSupportDetailResolver } from "./applicationSupportDetail.resolver";

@Module({
  imports: [ApplicationSupportDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationSupportDetailController],
  providers: [
    ApplicationSupportDetailService,
    ApplicationSupportDetailResolver,
  ],
  exports: [ApplicationSupportDetailService],
})
export class ApplicationSupportDetailModule {}
