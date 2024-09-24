import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OperationsCalendarServiceBase } from "./base/operationsCalendar.service.base";

@Injectable()
export class OperationsCalendarService extends OperationsCalendarServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
