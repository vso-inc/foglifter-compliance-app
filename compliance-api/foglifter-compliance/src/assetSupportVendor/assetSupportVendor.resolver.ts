import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssetSupportVendorResolverBase } from "./base/assetSupportVendor.resolver.base";
import { AssetSupportVendor } from "./base/AssetSupportVendor";
import { AssetSupportVendorService } from "./assetSupportVendor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssetSupportVendor)
export class AssetSupportVendorResolver extends AssetSupportVendorResolverBase {
  constructor(
    protected readonly service: AssetSupportVendorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
