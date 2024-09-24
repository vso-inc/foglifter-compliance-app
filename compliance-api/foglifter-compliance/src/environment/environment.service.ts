import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnvironmentServiceBase } from "./base/environment.service.base";

@Injectable()
export class EnvironmentService extends EnvironmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
