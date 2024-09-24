import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KeyFieldMetricService } from "./keyFieldMetric.service";
import { KeyFieldMetricControllerBase } from "./base/keyFieldMetric.controller.base";

@swagger.ApiTags("keyFieldMetrics")
@common.Controller("keyFieldMetrics")
export class KeyFieldMetricController extends KeyFieldMetricControllerBase {
  constructor(
    protected readonly service: KeyFieldMetricService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
