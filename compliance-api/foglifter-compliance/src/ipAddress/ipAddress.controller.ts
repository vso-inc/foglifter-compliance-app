import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IpAddressService } from "./ipAddress.service";
import { IpAddressControllerBase } from "./base/ipAddress.controller.base";

@swagger.ApiTags("ipAddresses")
@common.Controller("ipAddresses")
export class IpAddressController extends IpAddressControllerBase {
  constructor(
    protected readonly service: IpAddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
