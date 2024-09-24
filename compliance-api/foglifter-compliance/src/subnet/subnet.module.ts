import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubnetModuleBase } from "./base/subnet.module.base";
import { SubnetService } from "./subnet.service";
import { SubnetController } from "./subnet.controller";
import { SubnetResolver } from "./subnet.resolver";

@Module({
  imports: [SubnetModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubnetController],
  providers: [SubnetService, SubnetResolver],
  exports: [SubnetService],
})
export class SubnetModule {}
