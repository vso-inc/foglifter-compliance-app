import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ConfigModelResolverBase } from "./base/configModel.resolver.base";
import { ConfigModel } from "./base/ConfigModel";
import { ConfigModelService } from "./configModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ConfigModel)
export class ConfigModelResolver extends ConfigModelResolverBase {
  constructor(
    protected readonly service: ConfigModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
