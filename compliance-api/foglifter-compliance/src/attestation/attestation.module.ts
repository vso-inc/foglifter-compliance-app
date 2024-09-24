import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttestationModuleBase } from "./base/attestation.module.base";
import { AttestationService } from "./attestation.service";
import { AttestationController } from "./attestation.controller";
import { AttestationResolver } from "./attestation.resolver";

@Module({
  imports: [AttestationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttestationController],
  providers: [AttestationService, AttestationResolver],
  exports: [AttestationService],
})
export class AttestationModule {}
