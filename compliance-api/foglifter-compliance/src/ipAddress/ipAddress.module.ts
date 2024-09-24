import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IpAddressModuleBase } from "./base/ipAddress.module.base";
import { IpAddressService } from "./ipAddress.service";
import { IpAddressController } from "./ipAddress.controller";
import { IpAddressResolver } from "./ipAddress.resolver";

@Module({
  imports: [IpAddressModuleBase, forwardRef(() => AuthModule)],
  controllers: [IpAddressController],
  providers: [IpAddressService, IpAddressResolver],
  exports: [IpAddressService],
})
export class IpAddressModule {}
