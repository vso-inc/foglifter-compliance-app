import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BigfixContentResultModuleBase } from "./base/bigfixContentResult.module.base";
import { BigfixContentResultService } from "./bigfixContentResult.service";
import { BigfixContentResultController } from "./bigfixContentResult.controller";
import { BigfixContentResultResolver } from "./bigfixContentResult.resolver";

@Module({
  imports: [BigfixContentResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [BigfixContentResultController],
  providers: [BigfixContentResultService, BigfixContentResultResolver],
  exports: [BigfixContentResultService],
})
export class BigfixContentResultModule {}
