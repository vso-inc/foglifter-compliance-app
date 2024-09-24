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
import { RebootWindowWhereUniqueInput } from "./RebootWindowWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RebootWindowUpdateInput } from "./RebootWindowUpdateInput";

@ArgsType()
class UpdateRebootWindowArgs {
  @ApiProperty({
    required: true,
    type: () => RebootWindowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RebootWindowWhereUniqueInput)
  @Field(() => RebootWindowWhereUniqueInput, { nullable: false })
  where!: RebootWindowWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RebootWindowUpdateInput,
  })
  @ValidateNested()
  @Type(() => RebootWindowUpdateInput)
  @Field(() => RebootWindowUpdateInput, { nullable: false })
  data!: RebootWindowUpdateInput;
}

export { UpdateRebootWindowArgs as UpdateRebootWindowArgs };
