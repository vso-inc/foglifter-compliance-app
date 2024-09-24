import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttestationHostService } from "./attestationHost.service";
import { AttestationHostControllerBase } from "./base/attestationHost.controller.base";

@swagger.ApiTags("attestationHosts")
@common.Controller("attestationHosts")
export class AttestationHostController extends AttestationHostControllerBase {
  constructor(
    protected readonly service: AttestationHostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
