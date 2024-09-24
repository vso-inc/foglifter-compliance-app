import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RebootWindowModuleBase } from "./base/rebootWindow.module.base";
import { RebootWindowService } from "./rebootWindow.service";
import { RebootWindowController } from "./rebootWindow.controller";
import { RebootWindowResolver } from "./rebootWindow.resolver";

@Module({
  imports: [RebootWindowModuleBase, forwardRef(() => AuthModule)],
  controllers: [RebootWindowController],
  providers: [RebootWindowService, RebootWindowResolver],
  exports: [RebootWindowService],
})
export class RebootWindowModule {}
