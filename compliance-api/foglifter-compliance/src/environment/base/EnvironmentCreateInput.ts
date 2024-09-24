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
import { EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput } from "./EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EnvironmentCreateInput {
  @ApiProperty({
    required: false,
    type: () =>
      EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput,
  })
  @ValidateNested()
  @Type(
    () => EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput
  )
  @IsOptional()
  @Field(
    () => EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput,
    {
      nullable: true,
    }
  )
  endpointManagementSolution?: EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  environmentDesc!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  environmentName!: string;
}

export { EnvironmentCreateInput as EnvironmentCreateInput };
