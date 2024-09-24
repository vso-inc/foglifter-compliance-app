import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IpAddressResolverBase } from "./base/ipAddress.resolver.base";
import { IpAddress } from "./base/IpAddress";
import { IpAddressService } from "./ipAddress.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IpAddress)
export class IpAddressResolver extends IpAddressResolverBase {
  constructor(
    protected readonly service: IpAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
