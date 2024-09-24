import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ApplicationContactTitle } from "../applicationContact/ApplicationContactTitle";
import { ApplicationDeploymentTitle } from "../applicationDeployment/ApplicationDeploymentTitle";
import { ApplicationLifecycleDetailTitle } from "../applicationLifecycleDetail/ApplicationLifecycleDetailTitle";
import { ApplicationOrganizationTitle } from "../applicationOrganization/ApplicationOrganizationTitle";
import { ApplicationSupportDetailTitle } from "../applicationSupportDetail/ApplicationSupportDetailTitle";
import { AttestationTitle } from "../attestation/AttestationTitle";

export const ApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Accesses Internet" source="accessesInternet" />
        <ReferenceArrayInput
          source="applicationContact"
          reference="ApplicationContact"
        >
          <SelectArrayInput
            optionText={ApplicationContactTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicationDeployment"
          reference="ApplicationDeployment"
        >
          <SelectArrayInput
            optionText={ApplicationDeploymentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Application Id" source="applicationId" />
        <ReferenceArrayInput
          source="applicationLifecycleDetails"
          reference="ApplicationLifecycleDetail"
        >
          <SelectArrayInput
            optionText={ApplicationLifecycleDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicationOrganization"
          reference="ApplicationOrganization"
        >
          <SelectArrayInput
            optionText={ApplicationOrganizationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="applicationSupportDetails"
          reference="ApplicationSupportDetail"
        >
          <SelectArrayInput
            optionText={ApplicationSupportDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="attestation" reference="Attestation">
          <SelectArrayInput
            optionText={AttestationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Business Name" source="businessName" />
        <TextInput label="Category" source="category" />
        <TextInput
          label="Confidentiality Rating"
          source="confidentialityRating"
        />
        <TextInput label="Description" source="description" />
        <BooleanInput
          label="Has Personal Confidential Info"
          source="hasPersonalConfidentialInfo"
        />
        <BooleanInput
          label="Has Protected Health Info"
          source="hasProtectedHealthInfo"
        />
        <BooleanInput label="Is Life Sustaining" source="isLifeSustaining" />
        <BooleanInput
          label="Is Subject To Pci Compliance"
          source="isSubjectToPciCompliance"
        />
        <BooleanInput
          label="Is Subject To Sox Compliance"
          source="isSubjectToSoxCompliance"
        />
        <TextInput label="Name" source="name" />
        <TextInput
          label="Override Server Validation"
          source="overrideServerValidation"
        />
        <TextInput label="Short Name" source="shortName" />
        <TextInput label="Status" source="status" />
        <TextInput label="Sub Category" source="subCategory" />
        <TextInput label="Updated By" source="updatedBy" />
        <TextInput label="Version" source="version" />
        <TextInput label="Website Url" source="websiteUrl" />
      </SimpleForm>
    </Edit>
  );
};
