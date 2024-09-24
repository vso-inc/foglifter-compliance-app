import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubMgmtChangeLogServiceBase } from "./base/subMgmtChangeLog.service.base";

@Injectable()
export class SubMgmtChangeLogService extends SubMgmtChangeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
