import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BigfixRequestServiceBase } from "./base/bigfixRequest.service.base";

@Injectable()
export class BigfixRequestService extends BigfixRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
