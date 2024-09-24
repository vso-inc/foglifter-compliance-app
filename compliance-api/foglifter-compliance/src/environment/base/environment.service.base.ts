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
  Environment as PrismaEnvironment,
  EndpointManagementSolution as PrismaEndpointManagementSolution,
} from "@prisma/client";

export class EnvironmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EnvironmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.environment.count(args);
  }

  async environments(
    args: Prisma.EnvironmentFindManyArgs
  ): Promise<PrismaEnvironment[]> {
    return this.prisma.environment.findMany(args);
  }
  async environment(
    args: Prisma.EnvironmentFindUniqueArgs
  ): Promise<PrismaEnvironment | null> {
    return this.prisma.environment.findUnique(args);
  }
  async createEnvironment(
    args: Prisma.EnvironmentCreateArgs
  ): Promise<PrismaEnvironment> {
    return this.prisma.environment.create(args);
  }
  async updateEnvironment(
    args: Prisma.EnvironmentUpdateArgs
  ): Promise<PrismaEnvironment> {
    return this.prisma.environment.update(args);
  }
  async deleteEnvironment(
    args: Prisma.EnvironmentDeleteArgs
  ): Promise<PrismaEnvironment> {
    return this.prisma.environment.delete(args);
  }

  async findEndpointManagementSolution(
    parentId: number,
    args: Prisma.EndpointManagementSolutionFindManyArgs
  ): Promise<PrismaEndpointManagementSolution[]> {
    return this.prisma.environment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .endpointManagementSolution(args);
  }
}
