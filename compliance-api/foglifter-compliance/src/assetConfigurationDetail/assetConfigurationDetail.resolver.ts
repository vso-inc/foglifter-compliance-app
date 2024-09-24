import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetConfigurationDetailResolverBase } from "./base/assetConfigurationDetail.resolver.base";
import { AssetConfigurationDetail } from "./base/AssetConfigurationDetail";
import { AssetConfigurationDetailService } from "./assetConfigurationDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetConfigurationDetail)
export class AssetConfigurationDetailResolver extends AssetConfigurationDetailResolverBase {
  constructor(
    protected readonly service: AssetConfigurationDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
