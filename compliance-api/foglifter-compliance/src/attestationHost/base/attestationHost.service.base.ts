/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AttestationHost as PrismaAttestationHost,
  AttestationHostFixlet as PrismaAttestationHostFixlet,
  Asset as PrismaAsset,
  Attestation as PrismaAttestation,
} from "@prisma/client";

export class AttestationHostServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttestationHostCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attestationHost.count(args);
  }

  async attestationHosts(
    args: Prisma.AttestationHostFindManyArgs
  ): Promise<PrismaAttestationHost[]> {
    return this.prisma.attestationHost.findMany(args);
  }
  async attestationHost(
    args: Prisma.AttestationHostFindUniqueArgs
  ): Promise<PrismaAttestationHost | null> {
    return this.prisma.attestationHost.findUnique(args);
  }
  async createAttestationHost(
    args: Prisma.AttestationHostCreateArgs
  ): Promise<PrismaAttestationHost> {
    return this.prisma.attestationHost.create(args);
  }
  async updateAttestationHost(
    args: Prisma.AttestationHostUpdateArgs
  ): Promise<PrismaAttestationHost> {
    return this.prisma.attestationHost.update(args);
  }
  async deleteAttestationHost(
    args: Prisma.AttestationHostDeleteArgs
  ): Promise<PrismaAttestationHost> {
    return this.prisma.attestationHost.delete(args);
  }

  async findAttestationHostFixlet(
    parentId: number,
    args: Prisma.AttestationHostFixletFindManyArgs
  ): Promise<PrismaAttestationHostFixlet[]> {
    return this.prisma.attestationHost
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attestationHostFixlet(args);
  }

  async getAsset(parentId: number): Promise<PrismaAsset | null> {
    return this.prisma.attestationHost
      .findUnique({
        where: { id: parentId },
      })
      .asset();
  }

  async getAttestation(parentId: number): Promise<PrismaAttestation | null> {
    return this.prisma.attestationHost
      .findUnique({
        where: { id: parentId },
      })
      .attestation();
  }
}
