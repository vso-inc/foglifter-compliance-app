import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttestationHostServiceBase } from "./base/attestationHost.service.base";

@Injectable()
export class AttestationHostService extends AttestationHostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
