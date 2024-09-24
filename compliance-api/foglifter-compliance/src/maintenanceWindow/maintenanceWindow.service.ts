import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceWindowServiceBase } from "./base/maintenanceWindow.service.base";

@Injectable()
export class MaintenanceWindowService extends MaintenanceWindowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
