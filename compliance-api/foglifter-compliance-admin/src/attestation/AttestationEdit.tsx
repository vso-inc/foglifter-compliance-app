import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { AttestationHostTitle } from "../attestationHost/AttestationHostTitle";
import { AttestationTypeTitle } from "../attestationType/AttestationTypeTitle";

export const AttestationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="Alternate Contact Email"
          source="alternateContactEmail"
        />
        <TextInput
          label="Alternate Contact Nuid"
          source="alternateContactNuid"
        />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="attestationHost"
          reference="AttestationHost"
        >
          <SelectArrayInput
            optionText={AttestationHostTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="attestationType.id"
          reference="AttestationType"
          label="Attestation Type"
        >
          <SelectInput optionText={AttestationTypeTitle} />
        </ReferenceInput>
        <TextInput label="Case Id" source="caseId" />
        <BooleanInput
          label="Connected To A Third Party System"
          source="connectedToAThirdPartySystem"
        />
        <TextInput label="Guid" source="guid" />
        <BooleanInput label="Has Sensitive Data" source="hasSensitiveData" />
        <TextInput label="Impacted Region" source="impactedRegion" />
        <BooleanInput
          label="Is Emergency Request"
          source="isEmergencyRequest"
        />
        <BooleanInput
          label="Is Permanent Request"
          source="isPermanentRequest"
        />
        <TextInput label="Justification" source="justification" />
        <TextInput label="Long Term Solution" source="longTermSolution" />
        <TextInput
          label="Mitigating Compensating Controls"
          source="mitigatingCompensatingControls"
        />
        <TextInput label="Owning Organization" source="owningOrganization" />
        <TextInput label="Primary Contact Email" source="primaryContactEmail" />
        <TextInput label="Primary Contact Nuid" source="primaryContactNuid" />
        <TextInput label="Remediation Plan" source="remediationPlan" />
        <DateTimeInput
          label="Remediation Plan Targeted Completion"
          source="remediationPlanTargetedCompletion"
        />
        <TextInput label="Response" source="response" />
        <TextInput
          label="Risk Management Option"
          source="riskManagementOption"
        />
        <DateTimeInput label="Sent To Third Party" source="sentToThirdParty" />
        <TextInput label="Status" source="status" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
