import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConfigModelServiceBase } from "./base/configModel.service.base";

@Injectable()
export class ConfigModelService extends ConfigModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
