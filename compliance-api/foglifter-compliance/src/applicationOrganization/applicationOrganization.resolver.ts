import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationOrganizationResolverBase } from "./base/applicationOrganization.resolver.base";
import { ApplicationOrganization } from "./base/ApplicationOrganization";
import { ApplicationOrganizationService } from "./applicationOrganization.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationOrganization)
export class ApplicationOrganizationResolver extends ApplicationOrganizationResolverBase {
  constructor(
    protected readonly service: ApplicationOrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
