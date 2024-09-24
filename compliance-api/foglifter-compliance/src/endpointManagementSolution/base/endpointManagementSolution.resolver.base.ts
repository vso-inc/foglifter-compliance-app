/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { EndpointManagementSolution } from "./EndpointManagementSolution";
import { EndpointManagementSolutionCountArgs } from "./EndpointManagementSolutionCountArgs";
import { EndpointManagementSolutionFindManyArgs } from "./EndpointManagementSolutionFindManyArgs";
import { EndpointManagementSolutionFindUniqueArgs } from "./EndpointManagementSolutionFindUniqueArgs";
import { CreateEndpointManagementSolutionArgs } from "./CreateEndpointManagementSolutionArgs";
import { UpdateEndpointManagementSolutionArgs } from "./UpdateEndpointManagementSolutionArgs";
import { DeleteEndpointManagementSolutionArgs } from "./DeleteEndpointManagementSolutionArgs";
import { AssetFindManyArgs } from "../../asset/base/AssetFindManyArgs";
import { Asset } from "../../asset/base/Asset";
import { Environment } from "../../environment/base/Environment";
import { EndpointManagementSolutionService } from "../endpointManagementSolution.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EndpointManagementSolution)
export class EndpointManagementSolutionResolverBase {
  constructor(
    protected readonly service: EndpointManagementSolutionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EndpointManagementSolution",
    action: "read",
    possession: "any",
  })
  async _endpointManagementSolutionsMeta(
    @graphql.Args() args: EndpointManagementSolutionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EndpointManagementSolution])
  @nestAccessControl.UseRoles({
    resource: "EndpointManagementSolution",
    action: "read",
    possession: "any",
  })
  async endpointManagementSolutions(
    @graphql.Args() args: EndpointManagementSolutionFindManyArgs
  ): Promise<EndpointManagementSolution[]> {
    return this.service.endpointManagementSolutions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EndpointManagementSolution, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EndpointManagementSolution",
    action: "read",
    possession: "own",
  })
  async endpointManagementSolution(
    @graphql.Args() args: EndpointManagementSolutionFindUniqueArgs
  ): Promise<EndpointManagementSolution | null> {
    const result = await this.service.endpointManagementSolution(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EndpointManagementSolution)
  @nestAccessControl.UseRoles({
    resource: "EndpointManagementSolution",
    action: "create",
    possession: "any",
  })
  async createEndpointManagementSolution(
    @graphql.Args() args: CreateEndpointManagementSolutionArgs
  ): Promise<EndpointManagementSolution> {
    return await this.service.createEndpointManagementSolution({
      ...args,
      data: {
        ...args.data,

        environment: args.data.environment
          ? {
              connect: args.data.environment,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EndpointManagementSolution)
  @nestAccessControl.UseRoles({
    resource: "EndpointManagementSolution",
    action: "update",
    possession: "any",
  })
  async updateEndpointManagementSolution(
    @graphql.Args() args: UpdateEndpointManagementSolutionArgs
  ): Promise<EndpointManagementSolution | null> {
    try {
      return await this.service.updateEndpointManagementSolution({
        ...args,
        data: {
          ...args.data,

          environment: args.data.environment
            ? {
                connect: args.data.environment,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => EndpointManagementSolution)
  @nestAccessControl.UseRoles({
    resource: "EndpointManagementSolution",
    action: "delete",
    possession: "any",
  })
  async deleteEndpointManagementSolution(
    @graphql.Args() args: DeleteEndpointManagementSolutionArgs
  ): Promise<EndpointManagementSolution | null> {
    try {
      return await this.service.deleteEndpointManagementSolution(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Asset], { name: "asset" })
  @nestAccessControl.UseRoles({
    resource: "Asset",
    action: "read",
    possession: "any",
  })
  async findAsset(
    @graphql.Parent() parent: EndpointManagementSolution,
    @graphql.Args() args: AssetFindManyArgs
  ): Promise<Asset[]> {
    const results = await this.service.findAsset(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Environment, {
    nullable: true,
    name: "environment",
  })
  @nestAccessControl.UseRoles({
    resource: "Environment",
    action: "read",
    possession: "any",
  })
  async getEnvironment(
    @graphql.Parent() parent: EndpointManagementSolution
  ): Promise<Environment | null> {
    const result = await this.service.getEnvironment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
