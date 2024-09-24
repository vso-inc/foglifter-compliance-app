import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationDeploymentServiceBase } from "./base/applicationDeployment.service.base";

@Injectable()
export class ApplicationDeploymentService extends ApplicationDeploymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
