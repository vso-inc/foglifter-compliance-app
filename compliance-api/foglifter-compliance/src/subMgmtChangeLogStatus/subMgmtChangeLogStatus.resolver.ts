import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubMgmtChangeLogStatusResolverBase } from "./base/subMgmtChangeLogStatus.resolver.base";
import { SubMgmtChangeLogStatus } from "./base/SubMgmtChangeLogStatus";
import { SubMgmtChangeLogStatusService } from "./subMgmtChangeLogStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubMgmtChangeLogStatus)
export class SubMgmtChangeLogStatusResolver extends SubMgmtChangeLogStatusResolverBase {
  constructor(
    protected readonly service: SubMgmtChangeLogStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
