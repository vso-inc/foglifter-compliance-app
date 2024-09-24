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
  IsString,
  MaxLength,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { Environment } from "../../environment/base/Environment";

@ObjectType()
class EndpointManagementSolution {
  @ApiProperty({
    required: false,
    type: () => [Asset],
  })
  @ValidateNested()
  @Type(() => Asset)
  @IsOptional()
  asset?: Array<Asset>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: () => Environment,
  })
  @ValidateNested()
  @Type(() => Environment)
  @IsOptional()
  environment?: Environment | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;
}

export { EndpointManagementSolution as EndpointManagementSolution };
