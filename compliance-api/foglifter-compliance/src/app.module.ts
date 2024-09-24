import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ApplicationModule } from "./application/application.module";
import { ApplicationContactModule } from "./applicationContact/applicationContact.module";
import { ApplicationDeploymentModule } from "./applicationDeployment/applicationDeployment.module";
import { ApplicationLifecycleDetailModule } from "./applicationLifecycleDetail/applicationLifecycleDetail.module";
import { ApplicationOrganizationModule } from "./applicationOrganization/applicationOrganization.module";
import { ApplicationSupportDetailModule } from "./applicationSupportDetail/applicationSupportDetail.module";
import { AssetModule } from "./asset/asset.module";
import { AssetConfigurationDetailModule } from "./assetConfigurationDetail/assetConfigurationDetail.module";
import { AssetLocationDetailModule } from "./assetLocationDetail/assetLocationDetail.module";
import { AssetNetworkDetailModule } from "./assetNetworkDetail/assetNetworkDetail.module";
import { AssetSupportDetailModule } from "./assetSupportDetail/assetSupportDetail.module";
import { AssetSupportVendorModule } from "./assetSupportVendor/assetSupportVendor.module";
import { AttestationModule } from "./attestation/attestation.module";
import { AttestationHostModule } from "./attestationHost/attestationHost.module";
import { AttestationHostFixletModule } from "./attestationHostFixlet/attestationHostFixlet.module";
import { AttestationTypeModule } from "./attestationType/attestationType.module";
import { BigfixContentResultModule } from "./bigfixContentResult/bigfixContentResult.module";
import { BigfixRequestModule } from "./bigfixRequest/bigfixRequest.module";
import { BigfixRequestTypeModule } from "./bigfixRequestType/bigfixRequestType.module";
import { ConfigModelModule } from "./configModel/configModel.module";
import { ContactModule } from "./contact/contact.module";
import { DatasourceDeviceModule } from "./datasourceDevice/datasourceDevice.module";
import { EndpointManagementSolutionModule } from "./endpointManagementSolution/endpointManagementSolution.module";
import { EnvironmentModule } from "./environment/environment.module";
import { ExceptionModule } from "./exception/exception.module";
import { IpAddressModule } from "./ipAddress/ipAddress.module";
import { KeyFieldMetricModule } from "./keyFieldMetric/keyFieldMetric.module";
import { MaintenanceWindowModule } from "./maintenanceWindow/maintenanceWindow.module";
import { OperationsCalendarModule } from "./operationsCalendar/operationsCalendar.module";
import { OperationsCalendarStatusModule } from "./operationsCalendarStatus/operationsCalendarStatus.module";
import { PatchChannelModule } from "./patchChannel/patchChannel.module";
import { PatchChannelFixletModule } from "./patchChannelFixlet/patchChannelFixlet.module";
import { RebootWindowModule } from "./rebootWindow/rebootWindow.module";
import { SubMgmtBigfixRequestPatchChannelIncludeListModule } from "./subMgmtBigfixRequestPatchChannelIncludeList/subMgmtBigfixRequestPatchChannelIncludeList.module";
import { SubMgmtChangeLogModule } from "./subMgmtChangeLog/subMgmtChangeLog.module";
import { SubMgmtChangeLogStatusModule } from "./subMgmtChangeLogStatus/subMgmtChangeLogStatus.module";
import { SubnetModule } from "./subnet/subnet.module";
import { TssChangeLogModule } from "./tssChangeLog/tssChangeLog.module";
import { TssChangeLogStatusModule } from "./tssChangeLogStatus/tssChangeLogStatus.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ApplicationModule,
    ApplicationContactModule,
    ApplicationDeploymentModule,
    ApplicationLifecycleDetailModule,
    ApplicationOrganizationModule,
    ApplicationSupportDetailModule,
    AssetModule,
    AssetConfigurationDetailModule,
    AssetLocationDetailModule,
    AssetNetworkDetailModule,
    AssetSupportDetailModule,
    AssetSupportVendorModule,
    AttestationModule,
    AttestationHostModule,
    AttestationHostFixletModule,
    AttestationTypeModule,
    BigfixContentResultModule,
    BigfixRequestModule,
    BigfixRequestTypeModule,
    ConfigModelModule,
    ContactModule,
    DatasourceDeviceModule,
    EndpointManagementSolutionModule,
    EnvironmentModule,
    ExceptionModule,
    IpAddressModule,
    KeyFieldMetricModule,
    MaintenanceWindowModule,
    OperationsCalendarModule,
    OperationsCalendarStatusModule,
    PatchChannelModule,
    PatchChannelFixletModule,
    RebootWindowModule,
    SubMgmtBigfixRequestPatchChannelIncludeListModule,
    SubMgmtChangeLogModule,
    SubMgmtChangeLogStatusModule,
    SubnetModule,
    TssChangeLogModule,
    TssChangeLogStatusModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
