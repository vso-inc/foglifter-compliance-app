import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BigfixContentResultServiceBase } from "./base/bigfixContentResult.service.base";

@Injectable()
export class BigfixContentResultService extends BigfixContentResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
