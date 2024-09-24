import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetConfigurationDetailServiceBase } from "./base/assetConfigurationDetail.service.base";

@Injectable()
export class AssetConfigurationDetailService extends AssetConfigurationDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
