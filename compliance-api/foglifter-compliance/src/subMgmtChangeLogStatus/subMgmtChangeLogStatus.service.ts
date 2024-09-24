import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubMgmtChangeLogStatusServiceBase } from "./base/subMgmtChangeLogStatus.service.base";

@Injectable()
export class SubMgmtChangeLogStatusService extends SubMgmtChangeLogStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
