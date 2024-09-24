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
import { PatchChannelWhereUniqueInput } from "./PatchChannelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class PatchChannelFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => PatchChannelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PatchChannelWhereUniqueInput)
  @Field(() => PatchChannelWhereUniqueInput, { nullable: false })
  where!: PatchChannelWhereUniqueInput;
}

export { PatchChannelFindUniqueArgs as PatchChannelFindUniqueArgs };
