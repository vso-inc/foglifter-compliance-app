import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TssChangeLogModuleBase } from "./base/tssChangeLog.module.base";
import { TssChangeLogService } from "./tssChangeLog.service";
import { TssChangeLogController } from "./tssChangeLog.controller";
import { TssChangeLogResolver } from "./tssChangeLog.resolver";

@Module({
  imports: [TssChangeLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [TssChangeLogController],
  providers: [TssChangeLogService, TssChangeLogResolver],
  exports: [TssChangeLogService],
})
export class TssChangeLogModule {}
