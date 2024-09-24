import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AttestationTypeModuleBase } from "./base/attestationType.module.base";
import { AttestationTypeService } from "./attestationType.service";
import { AttestationTypeController } from "./attestationType.controller";
import { AttestationTypeResolver } from "./attestationType.resolver";

@Module({
  imports: [AttestationTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [AttestationTypeController],
  providers: [AttestationTypeService, AttestationTypeResolver],
  exports: [AttestationTypeService],
})
export class AttestationTypeModule {}
