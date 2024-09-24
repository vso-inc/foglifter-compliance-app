import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttestationHostFixletModuleBase } from "./base/attestationHostFixlet.module.base";
import { AttestationHostFixletService } from "./attestationHostFixlet.service";
import { AttestationHostFixletController } from "./attestationHostFixlet.controller";
import { AttestationHostFixletResolver } from "./attestationHostFixlet.resolver";

@Module({
  imports: [AttestationHostFixletModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttestationHostFixletController],
  providers: [AttestationHostFixletService, AttestationHostFixletResolver],
  exports: [AttestationHostFixletService],
})
export class AttestationHostFixletModule {}
