import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EndpointManagementSolutionServiceBase } from "./base/endpointManagementSolution.service.base";

@Injectable()
export class EndpointManagementSolutionService extends EndpointManagementSolutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
