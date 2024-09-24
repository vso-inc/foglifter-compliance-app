import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OperationsCalendarResolverBase } from "./base/operationsCalendar.resolver.base";
import { OperationsCalendar } from "./base/OperationsCalendar";
import { OperationsCalendarService } from "./operationsCalendar.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => OperationsCalendar)
export class OperationsCalendarResolver extends OperationsCalendarResolverBase {
  constructor(
    protected readonly service: OperationsCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
