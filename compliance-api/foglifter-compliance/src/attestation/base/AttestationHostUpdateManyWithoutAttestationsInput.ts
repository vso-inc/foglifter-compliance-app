/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AttestationHostWhereUniqueInput } from "../../attestationHost/base/AttestationHostWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AttestationHostUpdateManyWithoutAttestationsInput {
  @Field(() => [AttestationHostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttestationHostWhereUniqueInput],
  })
  connect?: Array<AttestationHostWhereUniqueInput>;

  @Field(() => [AttestationHostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttestationHostWhereUniqueInput],
  })
  disconnect?: Array<AttestationHostWhereUniqueInput>;

  @Field(() => [AttestationHostWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttestationHostWhereUniqueInput],
  })
  set?: Array<AttestationHostWhereUniqueInput>;
}

export { AttestationHostUpdateManyWithoutAttestationsInput as AttestationHostUpdateManyWithoutAttestationsInput };
