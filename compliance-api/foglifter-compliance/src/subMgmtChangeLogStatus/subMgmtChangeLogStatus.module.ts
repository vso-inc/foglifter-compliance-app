import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubMgmtChangeLogStatusModuleBase } from "./base/subMgmtChangeLogStatus.module.base";
import { SubMgmtChangeLogStatusService } from "./subMgmtChangeLogStatus.service";
import { SubMgmtChangeLogStatusController } from "./subMgmtChangeLogStatus.controller";
import { SubMgmtChangeLogStatusResolver } from "./subMgmtChangeLogStatus.resolver";

@Module({
  imports: [SubMgmtChangeLogStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubMgmtChangeLogStatusController],
  providers: [SubMgmtChangeLogStatusService, SubMgmtChangeLogStatusResolver],
  exports: [SubMgmtChangeLogStatusService],
})
export class SubMgmtChangeLogStatusModule {}
