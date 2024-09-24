import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PatchChannelFixletResolverBase } from "./base/patchChannelFixlet.resolver.base";
import { PatchChannelFixlet } from "./base/PatchChannelFixlet";
import { PatchChannelFixletService } from "./patchChannelFixlet.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatchChannelFixlet)
export class PatchChannelFixletResolver extends PatchChannelFixletResolverBase {
  constructor(
    protected readonly service: PatchChannelFixletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
