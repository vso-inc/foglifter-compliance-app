import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationDeploymentModuleBase } from "./base/applicationDeployment.module.base";
import { ApplicationDeploymentService } from "./applicationDeployment.service";
import { ApplicationDeploymentController } from "./applicationDeployment.controller";
import { ApplicationDeploymentResolver } from "./applicationDeployment.resolver";

@Module({
  imports: [ApplicationDeploymentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationDeploymentController],
  providers: [ApplicationDeploymentService, ApplicationDeploymentResolver],
  exports: [ApplicationDeploymentService],
})
export class ApplicationDeploymentModule {}
