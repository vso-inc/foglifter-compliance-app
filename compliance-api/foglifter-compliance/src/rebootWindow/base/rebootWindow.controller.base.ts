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
import { RebootWindowService } from "../rebootWindow.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RebootWindowCreateInput } from "./RebootWindowCreateInput";
import { RebootWindow } from "./RebootWindow";
import { RebootWindowFindManyArgs } from "./RebootWindowFindManyArgs";
import { RebootWindowWhereUniqueInput } from "./RebootWindowWhereUniqueInput";
import { RebootWindowUpdateInput } from "./RebootWindowUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RebootWindowControllerBase {
  constructor(
    protected readonly service: RebootWindowService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RebootWindow })
  @nestAccessControl.UseRoles({
    resource: "RebootWindow",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createRebootWindow(
    @common.Body() data: RebootWindowCreateInput
  ): Promise<RebootWindow> {
    return await this.service.createRebootWindow({
      data: {
        ...data,

        asset: data.asset
          ? {
              connect: data.asset,
            }
          : undefined,
      },
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        created: true,
        id: true,
        rebootWindowAvailableDayOfWeek: true,
        rebootWindowAvailableMonths: true,
        rebootWindowAvailableWeeksOfMonth: true,
        rebootWindowCloseTime: true,
        rebootWindowOpenTime: true,
        updated: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RebootWindow] })
  @ApiNestedQuery(RebootWindowFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RebootWindow",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rebootWindows(@common.Req() request: Request): Promise<RebootWindow[]> {
    const args = plainToClass(RebootWindowFindManyArgs, request.query);
    return this.service.rebootWindows({
      ...args,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        created: true,
        id: true,
        rebootWindowAvailableDayOfWeek: true,
        rebootWindowAvailableMonths: true,
        rebootWindowAvailableWeeksOfMonth: true,
        rebootWindowCloseTime: true,
        rebootWindowOpenTime: true,
        updated: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RebootWindow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RebootWindow",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async rebootWindow(
    @common.Param() params: RebootWindowWhereUniqueInput
  ): Promise<RebootWindow | null> {
    const result = await this.service.rebootWindow({
      where: params,
      select: {
        asset: {
          select: {
            id: true,
          },
        },

        created: true,
        id: true,
        rebootWindowAvailableDayOfWeek: true,
        rebootWindowAvailableMonths: true,
        rebootWindowAvailableWeeksOfMonth: true,
        rebootWindowCloseTime: true,
        rebootWindowOpenTime: true,
        updated: true,
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
  @swagger.ApiOkResponse({ type: RebootWindow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RebootWindow",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateRebootWindow(
    @common.Param() params: RebootWindowWhereUniqueInput,
    @common.Body() data: RebootWindowUpdateInput
  ): Promise<RebootWindow | null> {
    try {
      return await this.service.updateRebootWindow({
        where: params,
        data: {
          ...data,

          asset: data.asset
            ? {
                connect: data.asset,
              }
            : undefined,
        },
        select: {
          asset: {
            select: {
              id: true,
            },
          },

          created: true,
          id: true,
          rebootWindowAvailableDayOfWeek: true,
          rebootWindowAvailableMonths: true,
          rebootWindowAvailableWeeksOfMonth: true,
          rebootWindowCloseTime: true,
          rebootWindowOpenTime: true,
          updated: true,
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
  @swagger.ApiOkResponse({ type: RebootWindow })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RebootWindow",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRebootWindow(
    @common.Param() params: RebootWindowWhereUniqueInput
  ): Promise<RebootWindow | null> {
    try {
      return await this.service.deleteRebootWindow({
        where: params,
        select: {
          asset: {
            select: {
              id: true,
            },
          },

          created: true,
          id: true,
          rebootWindowAvailableDayOfWeek: true,
          rebootWindowAvailableMonths: true,
          rebootWindowAvailableWeeksOfMonth: true,
          rebootWindowCloseTime: true,
          rebootWindowOpenTime: true,
          updated: true,
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
