import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BigfixRequestTypeServiceBase } from "./base/bigfixRequestType.service.base";

@Injectable()
export class BigfixRequestTypeService extends BigfixRequestTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
