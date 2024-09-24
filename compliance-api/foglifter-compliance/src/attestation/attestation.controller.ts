import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttestationService } from "./attestation.service";
import { AttestationControllerBase } from "./base/attestation.controller.base";

@swagger.ApiTags("attestations")
@common.Controller("attestations")
export class AttestationController extends AttestationControllerBase {
  constructor(
    protected readonly service: AttestationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
