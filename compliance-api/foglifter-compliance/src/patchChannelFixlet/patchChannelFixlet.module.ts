import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatchChannelFixletModuleBase } from "./base/patchChannelFixlet.module.base";
import { PatchChannelFixletService } from "./patchChannelFixlet.service";
import { PatchChannelFixletController } from "./patchChannelFixlet.controller";
import { PatchChannelFixletResolver } from "./patchChannelFixlet.resolver";

@Module({
  imports: [PatchChannelFixletModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatchChannelFixletController],
  providers: [PatchChannelFixletService, PatchChannelFixletResolver],
  exports: [PatchChannelFixletService],
})
export class PatchChannelFixletModule {}
