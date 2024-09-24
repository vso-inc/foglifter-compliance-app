import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OperationsCalendarStatusResolverBase } from "./base/operationsCalendarStatus.resolver.base";
import { OperationsCalendarStatus } from "./base/OperationsCalendarStatus";
import { OperationsCalendarStatusService } from "./operationsCalendarStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OperationsCalendarStatus)
export class OperationsCalendarStatusResolver extends OperationsCalendarStatusResolverBase {
  constructor(
    protected readonly service: OperationsCalendarStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
