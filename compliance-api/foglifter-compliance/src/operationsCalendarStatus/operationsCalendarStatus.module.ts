import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OperationsCalendarStatusModuleBase } from "./base/operationsCalendarStatus.module.base";
import { OperationsCalendarStatusService } from "./operationsCalendarStatus.service";
import { OperationsCalendarStatusController } from "./operationsCalendarStatus.controller";
import { OperationsCalendarStatusResolver } from "./operationsCalendarStatus.resolver";

@Module({
  imports: [OperationsCalendarStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [OperationsCalendarStatusController],
  providers: [
    OperationsCalendarStatusService,
    OperationsCalendarStatusResolver,
  ],
  exports: [OperationsCalendarStatusService],
})
export class OperationsCalendarStatusModule {}
