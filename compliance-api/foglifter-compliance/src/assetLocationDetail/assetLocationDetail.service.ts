import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetLocationDetailServiceBase } from "./base/assetLocationDetail.service.base";

@Injectable()
export class AssetLocationDetailService extends AssetLocationDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
