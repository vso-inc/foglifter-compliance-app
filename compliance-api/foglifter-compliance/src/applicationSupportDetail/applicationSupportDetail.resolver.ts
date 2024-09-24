import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationSupportDetailResolverBase } from "./base/applicationSupportDetail.resolver.base";
import { ApplicationSupportDetail } from "./base/ApplicationSupportDetail";
import { ApplicationSupportDetailService } from "./applicationSupportDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationSupportDetail)
export class ApplicationSupportDetailResolver extends ApplicationSupportDetailResolverBase {
  constructor(
    protected readonly service: ApplicationSupportDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
