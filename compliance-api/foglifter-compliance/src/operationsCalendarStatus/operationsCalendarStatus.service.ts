import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OperationsCalendarStatusServiceBase } from "./base/operationsCalendarStatus.service.base";

@Injectable()
export class OperationsCalendarStatusService extends OperationsCalendarStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
