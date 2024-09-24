/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  IsBoolean,
  ValidateNested,
  IsInt,
  Max,
} from "class-validator";

import { Type } from "class-transformer";
import { AssetWhereUniqueInput } from "../../asset/base/AssetWhereUniqueInput";
import { BigfixRequestWhereUniqueInput } from "../../bigfixRequest/base/BigfixRequestWhereUniqueInput";
import { TssChangeLogStatusWhereUniqueInput } from "../../tssChangeLogStatus/base/TssChangeLogStatusWhereUniqueInput";

@InputType()
class TssChangeLogUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  action?: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  applyOn?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  applyOnNextScheduledMaintWindow?: boolean;

  @ApiProperty({
    required: false,
    type: () => AssetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssetWhereUniqueInput)
  @IsOptional()
  @Field(() => AssetWhereUniqueInput, {
    nullable: true,
  })
  asset?: AssetWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => BigfixRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BigfixRequestWhereUniqueInput)
  @IsOptional()
  @Field(() => BigfixRequestWhereUniqueInput, {
    nullable: true,
  })
  bigfixRequest?: BigfixRequestWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  remediationWindowHours?: number;

  @ApiProperty({
    required: false,
    type: () => TssChangeLogStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TssChangeLogStatusWhereUniqueInput)
  @IsOptional()
  @Field(() => TssChangeLogStatusWhereUniqueInput, {
    nullable: true,
  })
  tssChangeLogStatus?: TssChangeLogStatusWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  tssIncludeList?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  updatedBy?: string;
}

export { TssChangeLogUpdateInput as TssChangeLogUpdateInput };
