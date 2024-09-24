import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatchChannelFixletServiceBase } from "./base/patchChannelFixlet.service.base";

@Injectable()
export class PatchChannelFixletService extends PatchChannelFixletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
