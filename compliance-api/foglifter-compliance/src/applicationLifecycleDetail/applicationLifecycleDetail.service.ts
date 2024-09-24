import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationLifecycleDetailServiceBase } from "./base/applicationLifecycleDetail.service.base";

@Injectable()
export class ApplicationLifecycleDetailService extends ApplicationLifecycleDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
