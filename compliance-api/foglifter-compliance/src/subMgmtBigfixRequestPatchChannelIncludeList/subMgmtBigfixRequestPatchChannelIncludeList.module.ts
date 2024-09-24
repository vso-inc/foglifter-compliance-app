import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubMgmtBigfixRequestPatchChannelIncludeListModuleBase } from "./base/subMgmtBigfixRequestPatchChannelIncludeList.module.base";
import { SubMgmtBigfixRequestPatchChannelIncludeListService } from "./subMgmtBigfixRequestPatchChannelIncludeList.service";
import { SubMgmtBigfixRequestPatchChannelIncludeListController } from "./subMgmtBigfixRequestPatchChannelIncludeList.controller";
import { SubMgmtBigfixRequestPatchChannelIncludeListResolver } from "./subMgmtBigfixRequestPatchChannelIncludeList.resolver";

@Module({
  imports: [
    SubMgmtBigfixRequestPatchChannelIncludeListModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [SubMgmtBigfixRequestPatchChannelIncludeListController],
  providers: [
    SubMgmtBigfixRequestPatchChannelIncludeListService,
    SubMgmtBigfixRequestPatchChannelIncludeListResolver,
  ],
  exports: [SubMgmtBigfixRequestPatchChannelIncludeListService],
})
export class SubMgmtBigfixRequestPatchChannelIncludeListModule {}
