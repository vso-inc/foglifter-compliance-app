import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatasourceDeviceModuleBase } from "./base/datasourceDevice.module.base";
import { DatasourceDeviceService } from "./datasourceDevice.service";
import { DatasourceDeviceController } from "./datasourceDevice.controller";
import { DatasourceDeviceResolver } from "./datasourceDevice.resolver";

@Module({
  imports: [DatasourceDeviceModuleBase, forwardRef(() => AuthModule)],
  controllers: [DatasourceDeviceController],
  providers: [DatasourceDeviceService, DatasourceDeviceResolver],
  exports: [DatasourceDeviceService],
})
export class DatasourceDeviceModule {}
