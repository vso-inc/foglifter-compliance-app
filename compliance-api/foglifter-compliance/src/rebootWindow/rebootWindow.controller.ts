import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RebootWindowService } from "./rebootWindow.service";
import { RebootWindowControllerBase } from "./base/rebootWindow.controller.base";

@swagger.ApiTags("rebootWindows")
@common.Controller("rebootWindows")
export class RebootWindowController extends RebootWindowControllerBase {
  constructor(
    protected readonly service: RebootWindowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
