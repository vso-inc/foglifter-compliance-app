import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EndpointManagementSolutionService } from "./endpointManagementSolution.service";
import { EndpointManagementSolutionControllerBase } from "./base/endpointManagementSolution.controller.base";

@swagger.ApiTags("endpointManagementSolutions")
@common.Controller("endpointManagementSolutions")
export class EndpointManagementSolutionController extends EndpointManagementSolutionControllerBase {
  constructor(
    protected readonly service: EndpointManagementSolutionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
