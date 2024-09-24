import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetSupportDetailServiceBase } from "./base/assetSupportDetail.service.base";

@Injectable()
export class AssetSupportDetailService extends AssetSupportDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
