import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubnetServiceBase } from "./base/subnet.service.base";

@Injectable()
export class SubnetService extends SubnetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
