import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PatchChannelModuleBase } from "./base/patchChannel.module.base";
import { PatchChannelService } from "./patchChannel.service";
import { PatchChannelController } from "./patchChannel.controller";
import { PatchChannelResolver } from "./patchChannel.resolver";

@Module({
  imports: [PatchChannelModuleBase, forwardRef(() => AuthModule)],
  controllers: [PatchChannelController],
  providers: [PatchChannelService, PatchChannelResolver],
  exports: [PatchChannelService],
})
export class PatchChannelModule {}
