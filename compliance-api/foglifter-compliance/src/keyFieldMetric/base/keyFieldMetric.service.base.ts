/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, KeyFieldMetric as PrismaKeyFieldMetric } from "@prisma/client";

export class KeyFieldMetricServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.KeyFieldMetricCountArgs, "select">
  ): Promise<number> {
    return this.prisma.keyFieldMetric.count(args);
  }

  async keyFieldMetrics(
    args: Prisma.KeyFieldMetricFindManyArgs
  ): Promise<PrismaKeyFieldMetric[]> {
    return this.prisma.keyFieldMetric.findMany(args);
  }
  async keyFieldMetric(
    args: Prisma.KeyFieldMetricFindUniqueArgs
  ): Promise<PrismaKeyFieldMetric | null> {
    return this.prisma.keyFieldMetric.findUnique(args);
  }
  async createKeyFieldMetric(
    args: Prisma.KeyFieldMetricCreateArgs
  ): Promise<PrismaKeyFieldMetric> {
    return this.prisma.keyFieldMetric.create(args);
  }
  async updateKeyFieldMetric(
    args: Prisma.KeyFieldMetricUpdateArgs
  ): Promise<PrismaKeyFieldMetric> {
    return this.prisma.keyFieldMetric.update(args);
  }
  async deleteKeyFieldMetric(
    args: Prisma.KeyFieldMetricDeleteArgs
  ): Promise<PrismaKeyFieldMetric> {
    return this.prisma.keyFieldMetric.delete(args);
  }
}
