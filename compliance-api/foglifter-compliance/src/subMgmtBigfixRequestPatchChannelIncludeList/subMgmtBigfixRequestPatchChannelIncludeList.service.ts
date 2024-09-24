import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubMgmtBigfixRequestPatchChannelIncludeListServiceBase } from "./base/subMgmtBigfixRequestPatchChannelIncludeList.service.base";

@Injectable()
export class SubMgmtBigfixRequestPatchChannelIncludeListService extends SubMgmtBigfixRequestPatchChannelIncludeListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
