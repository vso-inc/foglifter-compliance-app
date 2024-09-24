import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EndpointManagementSolutionModuleBase } from "./base/endpointManagementSolution.module.base";
import { EndpointManagementSolutionService } from "./endpointManagementSolution.service";
import { EndpointManagementSolutionController } from "./endpointManagementSolution.controller";
import { EndpointManagementSolutionResolver } from "./endpointManagementSolution.resolver";

@Module({
  imports: [EndpointManagementSolutionModuleBase, forwardRef(() => AuthModule)],
  controllers: [EndpointManagementSolutionController],
  providers: [
    EndpointManagementSolutionService,
    EndpointManagementSolutionResolver,
  ],
  exports: [EndpointManagementSolutionService],
})
export class EndpointManagementSolutionModule {}
