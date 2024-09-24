import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OperationsCalendarStatusService } from "./operationsCalendarStatus.service";
import { OperationsCalendarStatusControllerBase } from "./base/operationsCalendarStatus.controller.base";

@swagger.ApiTags("operationsCalendarStatuses")
@common.Controller("operationsCalendarStatuses")
export class OperationsCalendarStatusController extends OperationsCalendarStatusControllerBase {
  constructor(
    protected readonly service: OperationsCalendarStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
