import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BigfixRequestResolverBase } from "./base/bigfixRequest.resolver.base";
import { BigfixRequest } from "./base/BigfixRequest";
import { BigfixRequestService } from "./bigfixRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BigfixRequest)
export class BigfixRequestResolver extends BigfixRequestResolverBase {
  constructor(
    protected readonly service: BigfixRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
