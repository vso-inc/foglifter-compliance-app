import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BigfixRequestTypeModuleBase } from "./base/bigfixRequestType.module.base";
import { BigfixRequestTypeService } from "./bigfixRequestType.service";
import { BigfixRequestTypeController } from "./bigfixRequestType.controller";
import { BigfixRequestTypeResolver } from "./bigfixRequestType.resolver";

@Module({
  imports: [BigfixRequestTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [BigfixRequestTypeController],
  providers: [BigfixRequestTypeService, BigfixRequestTypeResolver],
  exports: [BigfixRequestTypeService],
})
export class BigfixRequestTypeModule {}
