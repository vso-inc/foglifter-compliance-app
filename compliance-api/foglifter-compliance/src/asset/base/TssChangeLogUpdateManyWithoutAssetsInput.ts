/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TssChangeLogWhereUniqueInput } from "../../tssChangeLog/base/TssChangeLogWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TssChangeLogUpdateManyWithoutAssetsInput {
  @Field(() => [TssChangeLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TssChangeLogWhereUniqueInput],
  })
  connect?: Array<TssChangeLogWhereUniqueInput>;

  @Field(() => [TssChangeLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TssChangeLogWhereUniqueInput],
  })
  disconnect?: Array<TssChangeLogWhereUniqueInput>;

  @Field(() => [TssChangeLogWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TssChangeLogWhereUniqueInput],
  })
  set?: Array<TssChangeLogWhereUniqueInput>;
}

export { TssChangeLogUpdateManyWithoutAssetsInput as TssChangeLogUpdateManyWithoutAssetsInput };
