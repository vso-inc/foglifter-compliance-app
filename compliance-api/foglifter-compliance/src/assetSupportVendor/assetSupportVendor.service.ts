import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssetSupportVendorServiceBase } from "./base/assetSupportVendor.service.base";

@Injectable()
export class AssetSupportVendorService extends AssetSupportVendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
