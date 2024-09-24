import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { KeyFieldMetricServiceBase } from "./base/keyFieldMetric.service.base";

@Injectable()
export class KeyFieldMetricService extends KeyFieldMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
