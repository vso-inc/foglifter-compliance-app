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
import { BigfixRequestTypeWhereInput } from "./BigfixRequestTypeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class BigfixRequestTypeCountArgs {
  @ApiProperty({
    required: false,
    type: () => BigfixRequestTypeWhereInput,
  })
  @Field(() => BigfixRequestTypeWhereInput, { nullable: true })
  @Type(() => BigfixRequestTypeWhereInput)
  where?: BigfixRequestTypeWhereInput;
}

export { BigfixRequestTypeCountArgs as BigfixRequestTypeCountArgs };
