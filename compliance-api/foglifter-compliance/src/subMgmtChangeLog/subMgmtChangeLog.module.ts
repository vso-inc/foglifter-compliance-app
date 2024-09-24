import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubMgmtChangeLogModuleBase } from "./base/subMgmtChangeLog.module.base";
import { SubMgmtChangeLogService } from "./subMgmtChangeLog.service";
import { SubMgmtChangeLogController } from "./subMgmtChangeLog.controller";
import { SubMgmtChangeLogResolver } from "./subMgmtChangeLog.resolver";

@Module({
  imports: [SubMgmtChangeLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubMgmtChangeLogController],
  providers: [SubMgmtChangeLogService, SubMgmtChangeLogResolver],
  exports: [SubMgmtChangeLogService],
})
export class SubMgmtChangeLogModule {}
