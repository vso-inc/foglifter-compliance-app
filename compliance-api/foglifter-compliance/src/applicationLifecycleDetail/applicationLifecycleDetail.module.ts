import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationLifecycleDetailModuleBase } from "./base/applicationLifecycleDetail.module.base";
import { ApplicationLifecycleDetailService } from "./applicationLifecycleDetail.service";
import { ApplicationLifecycleDetailController } from "./applicationLifecycleDetail.controller";
import { ApplicationLifecycleDetailResolver } from "./applicationLifecycleDetail.resolver";

@Module({
  imports: [ApplicationLifecycleDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationLifecycleDetailController],
  providers: [
    ApplicationLifecycleDetailService,
    ApplicationLifecycleDetailResolver,
  ],
  exports: [ApplicationLifecycleDetailService],
})
export class ApplicationLifecycleDetailModule {}
