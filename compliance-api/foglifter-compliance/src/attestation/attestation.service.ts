import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttestationServiceBase } from "./base/attestation.service.base";

@Injectable()
export class AttestationService extends AttestationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
