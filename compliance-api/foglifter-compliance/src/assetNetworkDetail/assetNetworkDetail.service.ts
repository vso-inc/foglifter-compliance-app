import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetNetworkDetailServiceBase } from "./base/assetNetworkDetail.service.base";

@Injectable()
export class AssetNetworkDetailService extends AssetNetworkDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
