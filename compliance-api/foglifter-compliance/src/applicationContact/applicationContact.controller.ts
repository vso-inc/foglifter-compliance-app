import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationContactService } from "./applicationContact.service";
import { ApplicationContactControllerBase } from "./base/applicationContact.controller.base";

@swagger.ApiTags("applicationContacts")
@common.Controller("applicationContacts")
export class ApplicationContactController extends ApplicationContactControllerBase {
  constructor(
    protected readonly service: ApplicationContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
