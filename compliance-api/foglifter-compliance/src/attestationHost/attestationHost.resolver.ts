import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AttestationHostResolverBase } from "./base/attestationHost.resolver.base";
import { AttestationHost } from "./base/AttestationHost";
import { AttestationHostService } from "./attestationHost.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AttestationHost)
export class AttestationHostResolver extends AttestationHostResolverBase {
  constructor(
    protected readonly service: AttestationHostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
