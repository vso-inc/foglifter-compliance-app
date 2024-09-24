import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RebootWindowResolverBase } from "./base/rebootWindow.resolver.base";
import { RebootWindow } from "./base/RebootWindow";
import { RebootWindowService } from "./rebootWindow.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RebootWindow)
export class RebootWindowResolver extends RebootWindowResolverBase {
  constructor(
    protected readonly service: RebootWindowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
