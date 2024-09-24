import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TssChangeLogStatusModuleBase } from "./base/tssChangeLogStatus.module.base";
import { TssChangeLogStatusService } from "./tssChangeLogStatus.service";
import { TssChangeLogStatusController } from "./tssChangeLogStatus.controller";
import { TssChangeLogStatusResolver } from "./tssChangeLogStatus.resolver";

@Module({
  imports: [TssChangeLogStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [TssChangeLogStatusController],
  providers: [TssChangeLogStatusService, TssChangeLogStatusResolver],
  exports: [TssChangeLogStatusService],
})
export class TssChangeLogStatusModule {}
