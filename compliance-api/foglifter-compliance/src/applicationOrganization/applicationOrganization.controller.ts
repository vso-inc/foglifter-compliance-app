import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationOrganizationService } from "./applicationOrganization.service";
import { ApplicationOrganizationControllerBase } from "./base/applicationOrganization.controller.base";

@swagger.ApiTags("applicationOrganizations")
@common.Controller("applicationOrganizations")
export class ApplicationOrganizationController extends ApplicationOrganizationControllerBase {
  constructor(
    protected readonly service: ApplicationOrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
