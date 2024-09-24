import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ATTESTATION_TITLE_FIELD } from "./AttestationTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { ATTESTATIONTYPE_TITLE_FIELD } from "../attestationType/AttestationTypeTitle";

export const AttestationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Alternate Contact Email"
          source="alternateContactEmail"
        />
        <TextField
          label="Alternate Contact Nuid"
          source="alternateContactNuid"
        />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Attestation Type"
          source="attestationtype.id"
          reference="AttestationType"
        >
          <TextField source={ATTESTATIONTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Case Id" source="caseId" />
        <BooleanField
          label="Connected To A Third Party System"
          source="connectedToAThirdPartySystem"
        />
        <DateField source="created" label="Created" />
        <TextField label="Guid" source="guid" />
        <BooleanField label="Has Sensitive Data" source="hasSensitiveData" />
        <TextField label="ID" source="id" />
        <TextField label="Impacted Region" source="impactedRegion" />
        <BooleanField
          label="Is Emergency Request"
          source="isEmergencyRequest"
        />
        <BooleanField
          label="Is Permanent Request"
          source="isPermanentRequest"
        />
        <TextField label="Justification" source="justification" />
        <TextField label="Long Term Solution" source="longTermSolution" />
        <TextField
          label="Mitigating Compensating Controls"
          source="mitigatingCompensatingControls"
        />
        <TextField label="Owning Organization" source="owningOrganization" />
        <TextField label="Primary Contact Email" source="primaryContactEmail" />
        <TextField label="Primary Contact Nuid" source="primaryContactNuid" />
        <TextField label="Remediation Plan" source="remediationPlan" />
        <TextField
          label="Remediation Plan Targeted Completion"
          source="remediationPlanTargetedCompletion"
        />
        <TextField label="Response" source="response" />
        <TextField
          label="Risk Management Option"
          source="riskManagementOption"
        />
        <TextField label="Sent To Third Party" source="sentToThirdParty" />
        <TextField label="Status" source="status" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="AttestationHost"
          target="attestation_id"
          label="AttestationHosts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Attestation"
              source="attestation.id"
              reference="Attestation"
            >
              <TextField source={ATTESTATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <BooleanField
              label="Is Supported By Third Party"
              source="isSupportedByThirdParty"
            />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
