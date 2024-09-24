import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RebootWindowServiceBase } from "./base/rebootWindow.service.base";

@Injectable()
export class RebootWindowService extends RebootWindowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
