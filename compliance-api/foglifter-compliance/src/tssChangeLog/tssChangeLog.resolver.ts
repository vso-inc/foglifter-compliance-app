import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TssChangeLogResolverBase } from "./base/tssChangeLog.resolver.base";
import { TssChangeLog } from "./base/TssChangeLog";
import { TssChangeLogService } from "./tssChangeLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TssChangeLog)
export class TssChangeLogResolver extends TssChangeLogResolverBase {
  constructor(
    protected readonly service: TssChangeLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
