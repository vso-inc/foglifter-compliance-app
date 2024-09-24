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
import { SubnetWhereInput } from "./SubnetWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SubnetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SubnetWhereInput,
  })
  @ValidateNested()
  @Type(() => SubnetWhereInput)
  @IsOptional()
  @Field(() => SubnetWhereInput, {
    nullable: true,
  })
  every?: SubnetWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubnetWhereInput,
  })
  @ValidateNested()
  @Type(() => SubnetWhereInput)
  @IsOptional()
  @Field(() => SubnetWhereInput, {
    nullable: true,
  })
  some?: SubnetWhereInput;

  @ApiProperty({
    required: false,
    type: () => SubnetWhereInput,
  })
  @ValidateNested()
  @Type(() => SubnetWhereInput)
  @IsOptional()
  @Field(() => SubnetWhereInput, {
    nullable: true,
  })
  none?: SubnetWhereInput;
}
export { SubnetListRelationFilter as SubnetListRelationFilter };
