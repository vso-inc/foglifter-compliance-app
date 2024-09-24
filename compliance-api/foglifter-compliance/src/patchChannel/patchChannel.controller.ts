import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatchChannelService } from "./patchChannel.service";
import { PatchChannelControllerBase } from "./base/patchChannel.controller.base";

@swagger.ApiTags("patchChannels")
@common.Controller("patchChannels")
export class PatchChannelController extends PatchChannelControllerBase {
  constructor(
    protected readonly service: PatchChannelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
