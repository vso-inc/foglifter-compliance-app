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
  EndpointManagementSolution as PrismaEndpointManagementSolution,
  Asset as PrismaAsset,
  Environment as PrismaEnvironment,
} from "@prisma/client";

export class EndpointManagementSolutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EndpointManagementSolutionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.endpointManagementSolution.count(args);
  }

  async endpointManagementSolutions(
    args: Prisma.EndpointManagementSolutionFindManyArgs
  ): Promise<PrismaEndpointManagementSolution[]> {
    return this.prisma.endpointManagementSolution.findMany(args);
  }
  async endpointManagementSolution(
    args: Prisma.EndpointManagementSolutionFindUniqueArgs
  ): Promise<PrismaEndpointManagementSolution | null> {
    return this.prisma.endpointManagementSolution.findUnique(args);
  }
  async createEndpointManagementSolution(
    args: Prisma.EndpointManagementSolutionCreateArgs
  ): Promise<PrismaEndpointManagementSolution> {
    return this.prisma.endpointManagementSolution.create(args);
  }
  async updateEndpointManagementSolution(
    args: Prisma.EndpointManagementSolutionUpdateArgs
  ): Promise<PrismaEndpointManagementSolution> {
    return this.prisma.endpointManagementSolution.update(args);
  }
  async deleteEndpointManagementSolution(
    args: Prisma.EndpointManagementSolutionDeleteArgs
  ): Promise<PrismaEndpointManagementSolution> {
    return this.prisma.endpointManagementSolution.delete(args);
  }

  async findAsset(
    parentId: number,
    args: Prisma.AssetFindManyArgs
  ): Promise<PrismaAsset[]> {
    return this.prisma.endpointManagementSolution
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .asset(args);
  }

  async getEnvironment(parentId: number): Promise<PrismaEnvironment | null> {
    return this.prisma.endpointManagementSolution
      .findUnique({
        where: { id: parentId },
      })
      .environment();
  }
}
