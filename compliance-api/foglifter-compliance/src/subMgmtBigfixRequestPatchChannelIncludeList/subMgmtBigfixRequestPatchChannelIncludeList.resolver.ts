import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubMgmtBigfixRequestPatchChannelIncludeListResolverBase } from "./base/subMgmtBigfixRequestPatchChannelIncludeList.resolver.base";
import { SubMgmtBigfixRequestPatchChannelIncludeList } from "./base/SubMgmtBigfixRequestPatchChannelIncludeList";
import { SubMgmtBigfixRequestPatchChannelIncludeListService } from "./subMgmtBigfixRequestPatchChannelIncludeList.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubMgmtBigfixRequestPatchChannelIncludeList)
export class SubMgmtBigfixRequestPatchChannelIncludeListResolver extends SubMgmtBigfixRequestPatchChannelIncludeListResolverBase {
  constructor(
    protected readonly service: SubMgmtBigfixRequestPatchChannelIncludeListService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
