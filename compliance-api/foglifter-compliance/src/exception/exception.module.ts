import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExceptionModuleBase } from "./base/exception.module.base";
import { ExceptionService } from "./exception.service";
import { ExceptionController } from "./exception.controller";
import { ExceptionResolver } from "./exception.resolver";

@Module({
  imports: [ExceptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExceptionController],
  providers: [ExceptionService, ExceptionResolver],
  exports: [ExceptionService],
})
export class ExceptionModule {}
