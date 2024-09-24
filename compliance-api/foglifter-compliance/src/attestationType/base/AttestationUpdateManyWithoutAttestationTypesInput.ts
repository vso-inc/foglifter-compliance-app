/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AttestationWhereUniqueInput } from "../../attestation/base/AttestationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AttestationUpdateManyWithoutAttestationTypesInput {
  @Field(() => [AttestationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttestationWhereUniqueInput],
  })
  connect?: Array<AttestationWhereUniqueInput>;

  @Field(() => [AttestationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttestationWhereUniqueInput],
  })
  disconnect?: Array<AttestationWhereUniqueInput>;

  @Field(() => [AttestationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttestationWhereUniqueInput],
  })
  set?: Array<AttestationWhereUniqueInput>;
}

export { AttestationUpdateManyWithoutAttestationTypesInput as AttestationUpdateManyWithoutAttestationTypesInput };
