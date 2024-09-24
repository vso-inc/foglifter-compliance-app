import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TssChangeLogServiceBase } from "./base/tssChangeLog.service.base";

@Injectable()
export class TssChangeLogService extends TssChangeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
