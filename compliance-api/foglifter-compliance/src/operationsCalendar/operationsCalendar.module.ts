import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OperationsCalendarModuleBase } from "./base/operationsCalendar.module.base";
import { OperationsCalendarService } from "./operationsCalendar.service";
import { OperationsCalendarController } from "./operationsCalendar.controller";
import { OperationsCalendarResolver } from "./operationsCalendar.resolver";

@Module({
  imports: [OperationsCalendarModuleBase, forwardRef(() => AuthModule)],
  controllers: [OperationsCalendarController],
  providers: [OperationsCalendarService, OperationsCalendarResolver],
  exports: [OperationsCalendarService],
})
export class OperationsCalendarModule {}
