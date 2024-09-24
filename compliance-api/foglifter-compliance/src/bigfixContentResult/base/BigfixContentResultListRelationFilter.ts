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
import { BigfixContentResultWhereInput } from "./BigfixContentResultWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BigfixContentResultListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BigfixContentResultWhereInput,
  })
  @ValidateNested()
  @Type(() => BigfixContentResultWhereInput)
  @IsOptional()
  @Field(() => BigfixContentResultWhereInput, {
    nullable: true,
  })
  every?: BigfixContentResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => BigfixContentResultWhereInput,
  })
  @ValidateNested()
  @Type(() => BigfixContentResultWhereInput)
  @IsOptional()
  @Field(() => BigfixContentResultWhereInput, {
    nullable: true,
  })
  some?: BigfixContentResultWhereInput;

  @ApiProperty({
    required: false,
    type: () => BigfixContentResultWhereInput,
  })
  @ValidateNested()
  @Type(() => BigfixContentResultWhereInput)
  @IsOptional()
  @Field(() => BigfixContentResultWhereInput, {
    nullable: true,
  })
  none?: BigfixContentResultWhereInput;
}
export { BigfixContentResultListRelationFilter as BigfixContentResultListRelationFilter };
