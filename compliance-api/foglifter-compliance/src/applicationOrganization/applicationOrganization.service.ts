import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationOrganizationServiceBase } from "./base/applicationOrganization.service.base";

@Injectable()
export class ApplicationOrganizationService extends ApplicationOrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
