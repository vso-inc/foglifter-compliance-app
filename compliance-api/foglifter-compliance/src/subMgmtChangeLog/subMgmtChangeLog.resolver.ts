import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubMgmtChangeLogResolverBase } from "./base/subMgmtChangeLog.resolver.base";
import { SubMgmtChangeLog } from "./base/SubMgmtChangeLog";
import { SubMgmtChangeLogService } from "./subMgmtChangeLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubMgmtChangeLog)
export class SubMgmtChangeLogResolver extends SubMgmtChangeLogResolverBase {
  constructor(
    protected readonly service: SubMgmtChangeLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
