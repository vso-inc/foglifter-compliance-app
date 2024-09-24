import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetLocationDetailResolverBase } from "./base/assetLocationDetail.resolver.base";
import { AssetLocationDetail } from "./base/AssetLocationDetail";
import { AssetLocationDetailService } from "./assetLocationDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetLocationDetail)
export class AssetLocationDetailResolver extends AssetLocationDetailResolverBase {
  constructor(
    protected readonly service: AssetLocationDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
