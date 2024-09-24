import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttestationHostModuleBase } from "./base/attestationHost.module.base";
import { AttestationHostService } from "./attestationHost.service";
import { AttestationHostController } from "./attestationHost.controller";
import { AttestationHostResolver } from "./attestationHost.resolver";

@Module({
  imports: [AttestationHostModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttestationHostController],
  providers: [AttestationHostService, AttestationHostResolver],
  exports: [AttestationHostService],
})
export class AttestationHostModule {}
