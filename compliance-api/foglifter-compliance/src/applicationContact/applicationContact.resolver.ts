import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationContactResolverBase } from "./base/applicationContact.resolver.base";
import { ApplicationContact } from "./base/ApplicationContact";
import { ApplicationContactService } from "./applicationContact.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationContact)
export class ApplicationContactResolver extends ApplicationContactResolverBase {
  constructor(
    protected readonly service: ApplicationContactService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
