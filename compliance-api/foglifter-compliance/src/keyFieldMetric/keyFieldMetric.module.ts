import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { KeyFieldMetricModuleBase } from "./base/keyFieldMetric.module.base";
import { KeyFieldMetricService } from "./keyFieldMetric.service";
import { KeyFieldMetricController } from "./keyFieldMetric.controller";
import { KeyFieldMetricResolver } from "./keyFieldMetric.resolver";

@Module({
  imports: [KeyFieldMetricModuleBase, forwardRef(() => AuthModule)],
  controllers: [KeyFieldMetricController],
  providers: [KeyFieldMetricService, KeyFieldMetricResolver],
  exports: [KeyFieldMetricService],
})
export class KeyFieldMetricModule {}
