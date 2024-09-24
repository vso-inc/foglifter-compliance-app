import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConfigModelService } from "./configModel.service";
import { ConfigModelControllerBase } from "./base/configModel.controller.base";

@swagger.ApiTags("configModels")
@common.Controller("configModels")
export class ConfigModelController extends ConfigModelControllerBase {
  constructor(
    protected readonly service: ConfigModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
