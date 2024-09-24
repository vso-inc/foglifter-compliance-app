import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubnetService } from "./subnet.service";
import { SubnetControllerBase } from "./base/subnet.controller.base";

@swagger.ApiTags("subnets")
@common.Controller("subnets")
export class SubnetController extends SubnetControllerBase {
  constructor(
    protected readonly service: SubnetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
