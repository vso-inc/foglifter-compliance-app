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
import { AttestationHostWhereInput } from "./AttestationHostWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AttestationHostOrderByInput } from "./AttestationHostOrderByInput";

@ArgsType()
class AttestationHostFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AttestationHostWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AttestationHostWhereInput, { nullable: true })
  @Type(() => AttestationHostWhereInput)
  where?: AttestationHostWhereInput;

  @ApiProperty({
    required: false,
    type: [AttestationHostOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AttestationHostOrderByInput], { nullable: true })
  @Type(() => AttestationHostOrderByInput)
  orderBy?: Array<AttestationHostOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AttestationHostFindManyArgs as AttestationHostFindManyArgs };
