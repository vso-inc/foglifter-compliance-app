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
import {
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput } from "./TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput";
import { Type } from "class-transformer";

@InputType()
class TssChangeLogStatusCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: false,
    type: () => TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput,
  })
  @ValidateNested()
  @Type(() => TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput)
  @IsOptional()
  @Field(() => TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput, {
    nullable: true,
  })
  tssChangeLog?: TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput;
}

export { TssChangeLogStatusCreateInput as TssChangeLogStatusCreateInput };
