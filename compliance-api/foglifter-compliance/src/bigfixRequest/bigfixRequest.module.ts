import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BigfixRequestModuleBase } from "./base/bigfixRequest.module.base";
import { BigfixRequestService } from "./bigfixRequest.service";
import { BigfixRequestController } from "./bigfixRequest.controller";
import { BigfixRequestResolver } from "./bigfixRequest.resolver";

@Module({
  imports: [BigfixRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [BigfixRequestController],
  providers: [BigfixRequestService, BigfixRequestResolver],
  exports: [BigfixRequestService],
})
export class BigfixRequestModule {}
