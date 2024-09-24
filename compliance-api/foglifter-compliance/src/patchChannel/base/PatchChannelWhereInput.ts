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
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatchChannelFixletListRelationFilter } from "../../patchChannelFixlet/base/PatchChannelFixletListRelationFilter";
import { SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter } from "../../subMgmtBigfixRequestPatchChannelIncludeList/base/SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter";

@InputType()
class PatchChannelWhereInput {
  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  created?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isUserSelectable?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  note?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  operatingSystem?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => PatchChannelFixletListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PatchChannelFixletListRelationFilter)
  @IsOptional()
  @Field(() => PatchChannelFixletListRelationFilter, {
    nullable: true,
  })
  patchChannelFixlet?: PatchChannelFixletListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter)
  @IsOptional()
  @Field(() => SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter, {
    nullable: true,
  })
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updated?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  updatedBy?: StringFilter;
}

export { PatchChannelWhereInput as PatchChannelWhereInput };
