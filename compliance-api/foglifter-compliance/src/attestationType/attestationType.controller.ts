import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttestationTypeService } from "./attestationType.service";
import { AttestationTypeControllerBase } from "./base/attestationType.controller.base";

@swagger.ApiTags("attestationTypes")
@common.Controller("attestationTypes")
export class AttestationTypeController extends AttestationTypeControllerBase {
  constructor(
    protected readonly service: AttestationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
