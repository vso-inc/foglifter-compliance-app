/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Asset } from "../../asset/base/Asset";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { GraphQLBigInt } from "../../util/GraphQLBigInt";

@ObjectType()
class RebootWindow {
  @ApiProperty({
    required: false,
    type: () => Asset,
  })
  @ValidateNested()
  @Type(() => Asset)
  @IsOptional()
  asset?: Asset | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  created!: Date;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => GraphQLBigInt)
  id!: bigint;

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
  rebootWindowAvailableDayOfWeek!: string | null;

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
  rebootWindowAvailableMonths!: string | null;

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
  rebootWindowAvailableWeeksOfMonth!: string | null;

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
  rebootWindowCloseTime!: string | null;

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
  rebootWindowOpenTime!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updated!: Date;
}

export { RebootWindow as RebootWindow };
