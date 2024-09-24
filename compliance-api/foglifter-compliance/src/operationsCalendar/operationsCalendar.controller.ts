import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OperationsCalendarService } from "./operationsCalendar.service";
import { OperationsCalendarControllerBase } from "./base/operationsCalendar.controller.base";

@swagger.ApiTags("operationsCalendars")
@common.Controller("operationsCalendars")
export class OperationsCalendarController extends OperationsCalendarControllerBase {
  constructor(
    protected readonly service: OperationsCalendarService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
