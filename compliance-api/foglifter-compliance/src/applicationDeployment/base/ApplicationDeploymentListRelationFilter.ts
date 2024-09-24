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
import { ApplicationDeploymentWhereInput } from "./ApplicationDeploymentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ApplicationDeploymentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ApplicationDeploymentWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDeploymentWhereInput)
  @IsOptional()
  @Field(() => ApplicationDeploymentWhereInput, {
    nullable: true,
  })
  every?: ApplicationDeploymentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationDeploymentWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDeploymentWhereInput)
  @IsOptional()
  @Field(() => ApplicationDeploymentWhereInput, {
    nullable: true,
  })
  some?: ApplicationDeploymentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationDeploymentWhereInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDeploymentWhereInput)
  @IsOptional()
  @Field(() => ApplicationDeploymentWhereInput, {
    nullable: true,
  })
  none?: ApplicationDeploymentWhereInput;
}
export { ApplicationDeploymentListRelationFilter as ApplicationDeploymentListRelationFilter };
