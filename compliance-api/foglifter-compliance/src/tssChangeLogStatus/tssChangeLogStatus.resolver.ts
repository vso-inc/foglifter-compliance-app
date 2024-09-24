import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TssChangeLogStatusResolverBase } from "./base/tssChangeLogStatus.resolver.base";
import { TssChangeLogStatus } from "./base/TssChangeLogStatus";
import { TssChangeLogStatusService } from "./tssChangeLogStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TssChangeLogStatus)
export class TssChangeLogStatusResolver extends TssChangeLogStatusResolverBase {
  constructor(
    protected readonly service: TssChangeLogStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
