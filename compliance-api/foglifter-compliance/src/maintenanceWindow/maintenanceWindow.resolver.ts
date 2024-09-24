import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MaintenanceWindowResolverBase } from "./base/maintenanceWindow.resolver.base";
import { MaintenanceWindow } from "./base/MaintenanceWindow";
import { MaintenanceWindowService } from "./maintenanceWindow.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MaintenanceWindow)
export class MaintenanceWindowResolver extends MaintenanceWindowResolverBase {
  constructor(
    protected readonly service: MaintenanceWindowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
