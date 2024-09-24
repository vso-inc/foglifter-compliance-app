import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EnvironmentModuleBase } from "./base/environment.module.base";
import { EnvironmentService } from "./environment.service";
import { EnvironmentController } from "./environment.controller";
import { EnvironmentResolver } from "./environment.resolver";

@Module({
  imports: [EnvironmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [EnvironmentController],
  providers: [EnvironmentService, EnvironmentResolver],
  exports: [EnvironmentService],
})
export class EnvironmentModule {}
