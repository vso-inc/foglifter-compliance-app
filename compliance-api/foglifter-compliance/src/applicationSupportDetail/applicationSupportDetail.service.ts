import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationSupportDetailServiceBase } from "./base/applicationSupportDetail.service.base";

@Injectable()
export class ApplicationSupportDetailService extends ApplicationSupportDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
