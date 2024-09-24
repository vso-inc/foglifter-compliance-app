import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BigfixContentResultResolverBase } from "./base/bigfixContentResult.resolver.base";
import { BigfixContentResult } from "./base/BigfixContentResult";
import { BigfixContentResultService } from "./bigfixContentResult.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BigfixContentResult)
export class BigfixContentResultResolver extends BigfixContentResultResolverBase {
  constructor(
    protected readonly service: BigfixContentResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
