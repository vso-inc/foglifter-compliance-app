import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DatasourceDeviceResolverBase } from "./base/datasourceDevice.resolver.base";
import { DatasourceDevice } from "./base/DatasourceDevice";
import { DatasourceDeviceService } from "./datasourceDevice.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DatasourceDevice)
export class DatasourceDeviceResolver extends DatasourceDeviceResolverBase {
  constructor(
    protected readonly service: DatasourceDeviceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
