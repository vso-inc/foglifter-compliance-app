import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetSupportDetailResolverBase } from "./base/assetSupportDetail.resolver.base";
import { AssetSupportDetail } from "./base/AssetSupportDetail";
import { AssetSupportDetailService } from "./assetSupportDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetSupportDetail)
export class AssetSupportDetailResolver extends AssetSupportDetailResolverBase {
  constructor(
    protected readonly service: AssetSupportDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
