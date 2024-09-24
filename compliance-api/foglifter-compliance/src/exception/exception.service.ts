import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExceptionServiceBase } from "./base/exception.service.base";

@Injectable()
export class ExceptionService extends ExceptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
