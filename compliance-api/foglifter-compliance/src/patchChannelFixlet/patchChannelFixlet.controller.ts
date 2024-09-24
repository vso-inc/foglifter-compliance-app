import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PatchChannelFixletService } from "./patchChannelFixlet.service";
import { PatchChannelFixletControllerBase } from "./base/patchChannelFixlet.controller.base";

@swagger.ApiTags("patchChannelFixlets")
@common.Controller("patchChannelFixlets")
export class PatchChannelFixletController extends PatchChannelFixletControllerBase {
  constructor(
    protected readonly service: PatchChannelFixletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
