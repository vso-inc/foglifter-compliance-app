import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicationContactServiceBase } from "./base/applicationContact.service.base";

@Injectable()
export class ApplicationContactService extends ApplicationContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
