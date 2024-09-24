import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AttestationHostFixletResolverBase } from "./base/attestationHostFixlet.resolver.base";
import { AttestationHostFixlet } from "./base/AttestationHostFixlet";
import { AttestationHostFixletService } from "./attestationHostFixlet.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AttestationHostFixlet)
export class AttestationHostFixletResolver extends AttestationHostFixletResolverBase {
  constructor(
    protected readonly service: AttestationHostFixletService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
