import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PatchChannelResolverBase } from "./base/patchChannel.resolver.base";
import { PatchChannel } from "./base/PatchChannel";
import { PatchChannelService } from "./patchChannel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PatchChannel)
export class PatchChannelResolver extends PatchChannelResolverBase {
  constructor(
    protected readonly service: PatchChannelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
