import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttestationHostFixletService } from "./attestationHostFixlet.service";
import { AttestationHostFixletControllerBase } from "./base/attestationHostFixlet.controller.base";

@swagger.ApiTags("attestationHostFixlets")
@common.Controller("attestationHostFixlets")
export class AttestationHostFixletController extends AttestationHostFixletControllerBase {
  constructor(
    protected readonly service: AttestationHostFixletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
