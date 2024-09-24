/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EndpointManagementSolutionWhereUniqueInput } from "./EndpointManagementSolutionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EndpointManagementSolutionUpdateInput } from "./EndpointManagementSolutionUpdateInput";

@ArgsType()
class UpdateEndpointManagementSolutionArgs {
  @ApiProperty({
    required: true,
    type: () => EndpointManagementSolutionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EndpointManagementSolutionWhereUniqueInput)
  @Field(() => EndpointManagementSolutionWhereUniqueInput, { nullable: false })
  where!: EndpointManagementSolutionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EndpointManagementSolutionUpdateInput,
  })
  @ValidateNested()
  @Type(() => EndpointManagementSolutionUpdateInput)
  @Field(() => EndpointManagementSolutionUpdateInput, { nullable: false })
  data!: EndpointManagementSolutionUpdateInput;
}

export { UpdateEndpointManagementSolutionArgs as UpdateEndpointManagementSolutionArgs };
