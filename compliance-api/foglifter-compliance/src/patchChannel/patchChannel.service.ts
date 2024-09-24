import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PatchChannelServiceBase } from "./base/patchChannel.service.base";

@Injectable()
export class PatchChannelService extends PatchChannelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
