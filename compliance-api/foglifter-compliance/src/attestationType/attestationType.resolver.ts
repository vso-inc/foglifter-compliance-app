import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AttestationTypeResolverBase } from "./base/attestationType.resolver.base";
import { AttestationType } from "./base/AttestationType";
import { AttestationTypeService } from "./attestationType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AttestationType)
export class AttestationTypeResolver extends AttestationTypeResolverBase {
  constructor(
    protected readonly service: AttestationTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
