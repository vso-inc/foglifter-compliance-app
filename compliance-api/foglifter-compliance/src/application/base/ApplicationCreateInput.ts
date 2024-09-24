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
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { ApplicationContactCreateNestedManyWithoutApplicationsInput } from "./ApplicationContactCreateNestedManyWithoutApplicationsInput";
import { Type } from "class-transformer";
import { ApplicationDeploymentCreateNestedManyWithoutApplicationsInput } from "./ApplicationDeploymentCreateNestedManyWithoutApplicationsInput";
import { ApplicationLifecycleDetailCreateNestedManyWithoutApplicationsInput } from "./ApplicationLifecycleDetailCreateNestedManyWithoutApplicationsInput";
import { ApplicationOrganizationCreateNestedManyWithoutApplicationsInput } from "./ApplicationOrganizationCreateNestedManyWithoutApplicationsInput";
import { ApplicationSupportDetailCreateNestedManyWithoutApplicationsInput } from "./ApplicationSupportDetailCreateNestedManyWithoutApplicationsInput";
import { AttestationCreateNestedManyWithoutApplicationsInput } from "./AttestationCreateNestedManyWithoutApplicationsInput";

@InputType()
class ApplicationCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  accessesInternet?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => ApplicationContactCreateNestedManyWithoutApplicationsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationContactCreateNestedManyWithoutApplicationsInput)
  @IsOptional()
  @Field(() => ApplicationContactCreateNestedManyWithoutApplicationsInput, {
    nullable: true,
  })
  applicationContact?: ApplicationContactCreateNestedManyWithoutApplicationsInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationDeploymentCreateNestedManyWithoutApplicationsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationDeploymentCreateNestedManyWithoutApplicationsInput)
  @IsOptional()
  @Field(() => ApplicationDeploymentCreateNestedManyWithoutApplicationsInput, {
    nullable: true,
  })
  applicationDeployment?: ApplicationDeploymentCreateNestedManyWithoutApplicationsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  applicationId!: string;

  @ApiProperty({
    required: false,
    type: () =>
      ApplicationLifecycleDetailCreateNestedManyWithoutApplicationsInput,
  })
  @ValidateNested()
  @Type(
    () => ApplicationLifecycleDetailCreateNestedManyWithoutApplicationsInput
  )
  @IsOptional()
  @Field(
    () => ApplicationLifecycleDetailCreateNestedManyWithoutApplicationsInput,
    {
      nullable: true,
    }
  )
  applicationLifecycleDetails?: ApplicationLifecycleDetailCreateNestedManyWithoutApplicationsInput;

  @ApiProperty({
    required: false,
    type: () => ApplicationOrganizationCreateNestedManyWithoutApplicationsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationOrganizationCreateNestedManyWithoutApplicationsInput)
  @IsOptional()
  @Field(
    () => ApplicationOrganizationCreateNestedManyWithoutApplicationsInput,
    {
      nullable: true,
    }
  )
  applicationOrganization?: ApplicationOrganizationCreateNestedManyWithoutApplicationsInput;

  @ApiProperty({
    required: false,
    type: () =>
      ApplicationSupportDetailCreateNestedManyWithoutApplicationsInput,
  })
  @ValidateNested()
  @Type(() => ApplicationSupportDetailCreateNestedManyWithoutApplicationsInput)
  @IsOptional()
  @Field(
    () => ApplicationSupportDetailCreateNestedManyWithoutApplicationsInput,
    {
      nullable: true,
    }
  )
  applicationSupportDetails?: ApplicationSupportDetailCreateNestedManyWithoutApplicationsInput;

  @ApiProperty({
    required: false,
    type: () => AttestationCreateNestedManyWithoutApplicationsInput,
  })
  @ValidateNested()
  @Type(() => AttestationCreateNestedManyWithoutApplicationsInput)
  @IsOptional()
  @Field(() => AttestationCreateNestedManyWithoutApplicationsInput, {
    nullable: true,
  })
  attestation?: AttestationCreateNestedManyWithoutApplicationsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  businessName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  confidentialityRating?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hasPersonalConfidentialInfo?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  hasProtectedHealthInfo?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isLifeSustaining?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSubjectToPciCompliance?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isSubjectToSoxCompliance?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  overrideServerValidation?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  shortName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  subCategory?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  updatedBy!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  version?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  websiteUrl?: string | null;
}

export { ApplicationCreateInput as ApplicationCreateInput };
