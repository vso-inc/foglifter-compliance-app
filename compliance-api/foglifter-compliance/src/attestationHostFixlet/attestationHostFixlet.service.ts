import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttestationHostFixletServiceBase } from "./base/attestationHostFixlet.service.base";

@Injectable()
export class AttestationHostFixletService extends AttestationHostFixletServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
