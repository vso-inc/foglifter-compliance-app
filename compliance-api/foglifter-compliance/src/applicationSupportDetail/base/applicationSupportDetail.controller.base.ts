/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ApplicationSupportDetailService } from "../applicationSupportDetail.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ApplicationSupportDetailCreateInput } from "./ApplicationSupportDetailCreateInput";
import { ApplicationSupportDetail } from "./ApplicationSupportDetail";
import { ApplicationSupportDetailFindManyArgs } from "./ApplicationSupportDetailFindManyArgs";
import { ApplicationSupportDetailWhereUniqueInput } from "./ApplicationSupportDetailWhereUniqueInput";
import { ApplicationSupportDetailUpdateInput } from "./ApplicationSupportDetailUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ApplicationSupportDetailControllerBase {
  constructor(
    protected readonly service: ApplicationSupportDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ApplicationSupportDetail })
  @nestAccessControl.UseRoles({
    resource: "ApplicationSupportDetail",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createApplicationSupportDetail(
    @common.Body() data: ApplicationSupportDetailCreateInput
  ): Promise<ApplicationSupportDetail> {
    return await this.service.createApplicationSupportDetail({
      data: {
        ...data,

        application: data.application
          ? {
              connect: data.application,
            }
          : undefined,
      },
      select: {
        application: {
          select: {
            id: true,
          },
        },

        businessRequiredRecoveryPointObjective: true,
        businessRequiredRecoveryTimeObjective: true,
        id: true,
        infrastructureSupport: true,
        owningOrganization: true,
        owningSubOrganization: true,
        recoveryPointCapability: true,
        recoveryTimeCapability: true,
        resiliencyTier: true,
        support: true,
        supportOrganization: true,
        supportTier: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ApplicationSupportDetail] })
  @ApiNestedQuery(ApplicationSupportDetailFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ApplicationSupportDetail",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async applicationSupportDetails(
    @common.Req() request: Request
  ): Promise<ApplicationSupportDetail[]> {
    const args = plainToClass(
      ApplicationSupportDetailFindManyArgs,
      request.query
    );
    return this.service.applicationSupportDetails({
      ...args,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        businessRequiredRecoveryPointObjective: true,
        businessRequiredRecoveryTimeObjective: true,
        id: true,
        infrastructureSupport: true,
        owningOrganization: true,
        owningSubOrganization: true,
        recoveryPointCapability: true,
        recoveryTimeCapability: true,
        resiliencyTier: true,
        support: true,
        supportOrganization: true,
        supportTier: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ApplicationSupportDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApplicationSupportDetail",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async applicationSupportDetail(
    @common.Param() params: ApplicationSupportDetailWhereUniqueInput
  ): Promise<ApplicationSupportDetail | null> {
    const result = await this.service.applicationSupportDetail({
      where: params,
      select: {
        application: {
          select: {
            id: true,
          },
        },

        businessRequiredRecoveryPointObjective: true,
        businessRequiredRecoveryTimeObjective: true,
        id: true,
        infrastructureSupport: true,
        owningOrganization: true,
        owningSubOrganization: true,
        recoveryPointCapability: true,
        recoveryTimeCapability: true,
        resiliencyTier: true,
        support: true,
        supportOrganization: true,
        supportTier: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ApplicationSupportDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApplicationSupportDetail",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateApplicationSupportDetail(
    @common.Param() params: ApplicationSupportDetailWhereUniqueInput,
    @common.Body() data: ApplicationSupportDetailUpdateInput
  ): Promise<ApplicationSupportDetail | null> {
    try {
      return await this.service.updateApplicationSupportDetail({
        where: params,
        data: {
          ...data,

          application: data.application
            ? {
                connect: data.application,
              }
            : undefined,
        },
        select: {
          application: {
            select: {
              id: true,
            },
          },

          businessRequiredRecoveryPointObjective: true,
          businessRequiredRecoveryTimeObjective: true,
          id: true,
          infrastructureSupport: true,
          owningOrganization: true,
          owningSubOrganization: true,
          recoveryPointCapability: true,
          recoveryTimeCapability: true,
          resiliencyTier: true,
          support: true,
          supportOrganization: true,
          supportTier: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ApplicationSupportDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ApplicationSupportDetail",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteApplicationSupportDetail(
    @common.Param() params: ApplicationSupportDetailWhereUniqueInput
  ): Promise<ApplicationSupportDetail | null> {
    try {
      return await this.service.deleteApplicationSupportDetail({
        where: params,
        select: {
          application: {
            select: {
              id: true,
            },
          },

          businessRequiredRecoveryPointObjective: true,
          businessRequiredRecoveryTimeObjective: true,
          id: true,
          infrastructureSupport: true,
          owningOrganization: true,
          owningSubOrganization: true,
          recoveryPointCapability: true,
          recoveryTimeCapability: true,
          resiliencyTier: true,
          support: true,
          supportOrganization: true,
          supportTier: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
