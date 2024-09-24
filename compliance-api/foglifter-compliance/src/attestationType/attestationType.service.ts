import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttestationTypeServiceBase } from "./base/attestationType.service.base";

@Injectable()
export class AttestationTypeService extends AttestationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
