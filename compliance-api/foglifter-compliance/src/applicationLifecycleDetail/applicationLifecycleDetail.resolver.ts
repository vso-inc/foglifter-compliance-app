import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationLifecycleDetailResolverBase } from "./base/applicationLifecycleDetail.resolver.base";
import { ApplicationLifecycleDetail } from "./base/ApplicationLifecycleDetail";
import { ApplicationLifecycleDetailService } from "./applicationLifecycleDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationLifecycleDetail)
export class ApplicationLifecycleDetailResolver extends ApplicationLifecycleDetailResolverBase {
  constructor(
    protected readonly service: ApplicationLifecycleDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
