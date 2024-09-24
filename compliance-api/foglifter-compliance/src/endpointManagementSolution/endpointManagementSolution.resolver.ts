import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EndpointManagementSolutionResolverBase } from "./base/endpointManagementSolution.resolver.base";
import { EndpointManagementSolution } from "./base/EndpointManagementSolution";
import { EndpointManagementSolutionService } from "./endpointManagementSolution.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EndpointManagementSolution)
export class EndpointManagementSolutionResolver extends EndpointManagementSolutionResolverBase {
  constructor(
    protected readonly service: EndpointManagementSolutionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
