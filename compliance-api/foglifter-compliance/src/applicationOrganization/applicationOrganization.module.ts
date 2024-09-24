import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationOrganizationModuleBase } from "./base/applicationOrganization.module.base";
import { ApplicationOrganizationService } from "./applicationOrganization.service";
import { ApplicationOrganizationController } from "./applicationOrganization.controller";
import { ApplicationOrganizationResolver } from "./applicationOrganization.resolver";

@Module({
  imports: [ApplicationOrganizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationOrganizationController],
  providers: [ApplicationOrganizationService, ApplicationOrganizationResolver],
  exports: [ApplicationOrganizationService],
})
export class ApplicationOrganizationModule {}
