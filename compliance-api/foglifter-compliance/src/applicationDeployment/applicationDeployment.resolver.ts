import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationDeploymentResolverBase } from "./base/applicationDeployment.resolver.base";
import { ApplicationDeployment } from "./base/ApplicationDeployment";
import { ApplicationDeploymentService } from "./applicationDeployment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationDeployment)
export class ApplicationDeploymentResolver extends ApplicationDeploymentResolverBase {
  constructor(
    protected readonly service: ApplicationDeploymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
