import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetNetworkDetailResolverBase } from "./base/assetNetworkDetail.resolver.base";
import { AssetNetworkDetail } from "./base/AssetNetworkDetail";
import { AssetNetworkDetailService } from "./assetNetworkDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetNetworkDetail)
export class AssetNetworkDetailResolver extends AssetNetworkDetailResolverBase {
  constructor(
    protected readonly service: AssetNetworkDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
