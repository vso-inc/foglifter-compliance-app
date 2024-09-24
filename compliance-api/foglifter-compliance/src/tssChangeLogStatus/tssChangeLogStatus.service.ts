import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TssChangeLogStatusServiceBase } from "./base/tssChangeLogStatus.service.base";

@Injectable()
export class TssChangeLogStatusService extends TssChangeLogStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
