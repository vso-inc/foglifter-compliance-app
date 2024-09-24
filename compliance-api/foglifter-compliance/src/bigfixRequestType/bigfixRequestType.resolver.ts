import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BigfixRequestTypeResolverBase } from "./base/bigfixRequestType.resolver.base";
import { BigfixRequestType } from "./base/BigfixRequestType";
import { BigfixRequestTypeService } from "./bigfixRequestType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BigfixRequestType)
export class BigfixRequestTypeResolver extends BigfixRequestTypeResolverBase {
  constructor(
    protected readonly service: BigfixRequestTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
