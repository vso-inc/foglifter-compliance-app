import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationContactModuleBase } from "./base/applicationContact.module.base";
import { ApplicationContactService } from "./applicationContact.service";
import { ApplicationContactController } from "./applicationContact.controller";
import { ApplicationContactResolver } from "./applicationContact.resolver";

@Module({
  imports: [ApplicationContactModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationContactController],
  providers: [ApplicationContactService, ApplicationContactResolver],
  exports: [ApplicationContactService],
})
export class ApplicationContactModule {}
