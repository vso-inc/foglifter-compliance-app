import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { KeyFieldMetricResolverBase } from "./base/keyFieldMetric.resolver.base";
import { KeyFieldMetric } from "./base/KeyFieldMetric";
import { KeyFieldMetricService } from "./keyFieldMetric.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => KeyFieldMetric)
export class KeyFieldMetricResolver extends KeyFieldMetricResolverBase {
  constructor(
    protected readonly service: KeyFieldMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
