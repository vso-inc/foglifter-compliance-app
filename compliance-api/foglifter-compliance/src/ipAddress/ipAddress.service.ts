import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IpAddressServiceBase } from "./base/ipAddress.service.base";

@Injectable()
export class IpAddressService extends IpAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
