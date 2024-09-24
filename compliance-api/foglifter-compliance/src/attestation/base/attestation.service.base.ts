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
  Attestation as PrismaAttestation,
  AttestationHost as PrismaAttestationHost,
  Application as PrismaApplication,
  AttestationType as PrismaAttestationType,
} from "@prisma/client";

export class AttestationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AttestationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.attestation.count(args);
  }

  async attestations(
    args: Prisma.AttestationFindManyArgs
  ): Promise<PrismaAttestation[]> {
    return this.prisma.attestation.findMany(args);
  }
  async attestation(
    args: Prisma.AttestationFindUniqueArgs
  ): Promise<PrismaAttestation | null> {
    return this.prisma.attestation.findUnique(args);
  }
  async createAttestation(
    args: Prisma.AttestationCreateArgs
  ): Promise<PrismaAttestation> {
    return this.prisma.attestation.create(args);
  }
  async updateAttestation(
    args: Prisma.AttestationUpdateArgs
  ): Promise<PrismaAttestation> {
    return this.prisma.attestation.update(args);
  }
  async deleteAttestation(
    args: Prisma.AttestationDeleteArgs
  ): Promise<PrismaAttestation> {
    return this.prisma.attestation.delete(args);
  }

  async findAttestationHost(
    parentId: number,
    args: Prisma.AttestationHostFindManyArgs
  ): Promise<PrismaAttestationHost[]> {
    return this.prisma.attestation
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .attestationHost(args);
  }

  async getApplication(parentId: number): Promise<PrismaApplication | null> {
    return this.prisma.attestation
      .findUnique({
        where: { id: parentId },
      })
      .application();
  }

  async getAttestationType(
    parentId: number
  ): Promise<PrismaAttestationType | null> {
    return this.prisma.attestation
      .findUnique({
        where: { id: parentId },
      })
      .attestationType();
  }
}
