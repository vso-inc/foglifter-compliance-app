import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DatasourceDeviceServiceBase } from "./base/datasourceDevice.service.base";

@Injectable()
export class DatasourceDeviceService extends DatasourceDeviceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
