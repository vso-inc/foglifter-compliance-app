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
import { AssetLocationDetailWhereInput } from "./AssetLocationDetailWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AssetLocationDetailOrderByInput } from "./AssetLocationDetailOrderByInput";

@ArgsType()
class AssetLocationDetailFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AssetLocationDetailWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AssetLocationDetailWhereInput, { nullable: true })
  @Type(() => AssetLocationDetailWhereInput)
  where?: AssetLocationDetailWhereInput;

  @ApiProperty({
    required: false,
    type: [AssetLocationDetailOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AssetLocationDetailOrderByInput], { nullable: true })
  @Type(() => AssetLocationDetailOrderByInput)
  orderBy?: Array<AssetLocationDetailOrderByInput>;

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

export { AssetLocationDetailFindManyArgs as AssetLocationDetailFindManyArgs };
