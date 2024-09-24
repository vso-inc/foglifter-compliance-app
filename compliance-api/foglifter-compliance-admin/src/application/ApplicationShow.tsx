import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "./ApplicationTitle";
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ATTESTATIONTYPE_TITLE_FIELD } from "../attestationType/AttestationTypeTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Accesses Internet" source="accessesInternet" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Business Name" source="businessName" />
        <TextField label="Category" source="category" />
        <TextField
          label="Confidentiality Rating"
          source="confidentialityRating"
        />
        <DateField source="created" label="Created" />
        <TextField label="Description" source="description" />
        <BooleanField
          label="Has Personal Confidential Info"
          source="hasPersonalConfidentialInfo"
        />
        <BooleanField
          label="Has Protected Health Info"
          source="hasProtectedHealthInfo"
        />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Life Sustaining" source="isLifeSustaining" />
        <BooleanField
          label="Is Subject To Pci Compliance"
          source="isSubjectToPciCompliance"
        />
        <BooleanField
          label="Is Subject To Sox Compliance"
          source="isSubjectToSoxCompliance"
        />
        <TextField label="Name" source="name" />
        <TextField
          label="Override Server Validation"
          source="overrideServerValidation"
        />
        <TextField label="Short Name" source="shortName" />
        <TextField label="Status" source="status" />
        <TextField label="Sub Category" source="subCategory" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <TextField label="Version" source="version" />
        <TextField label="Website Url" source="websiteUrl" />
        <ReferenceManyField
          reference="ApplicationContact"
          target="app_id"
          label="ApplicationContacts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Application Id" source="applicationId" />
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField label="Role Ends" source="roleEnds" />
            <TextField label="Role Starts" source="roleStarts" />
            <TextField label="Role Type" source="roleType" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ApplicationDeployment"
          target="app_id"
          label="ApplicationDeployments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Deployment Id" source="deploymentId" />
            <TextField label="Deployment Name" source="deploymentName" />
            <TextField label="Deployment Note" source="deploymentNote" />
            <TextField label="Deployment Status" source="deploymentStatus" />
            <TextField label="Deployment Type" source="deploymentType" />
            <TextField label="ID" source="id" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ApplicationLifecycleDetail"
          target="app_id"
          label="ApplicationLifecycleDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Actual Decommission"
              source="actualDecommission"
            />
            <TextField label="Actual Retirement" source="actualRetirement" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Decommission Process"
              source="decommissionProcess"
            />
            <TextField label="Decommission State" source="decommissionState" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Dr Enabled" source="isDrEnabled" />
            <TextField
              label="Planned Decommission"
              source="plannedDecommission"
            />
            <TextField label="Planned Retirement" source="plannedRetirement" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ApplicationOrganization"
          target="app_id"
          label="ApplicationOrganizations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField label="Level" source="level" />
            <TextField label="Name" source="name" />
            <TextField label="Type Field" source="typeField" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ApplicationSupportDetail"
          target="app_id"
          label="ApplicationSupportDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="Business Required Recovery Point Objective"
              source="businessRequiredRecoveryPointObjective"
            />
            <TextField
              label="Business Required Recovery Time Objective"
              source="businessRequiredRecoveryTimeObjective"
            />
            <TextField label="ID" source="id" />
            <TextField
              label="Infrastructure Support"
              source="infrastructureSupport"
            />
            <TextField
              label="Owning Organization"
              source="owningOrganization"
            />
            <TextField
              label="Owning Sub Organization"
              source="owningSubOrganization"
            />
            <TextField
              label="Recovery Point Capability"
              source="recoveryPointCapability"
            />
            <TextField
              label="Recovery Time Capability"
              source="recoveryTimeCapability"
            />
            <TextField label="Resiliency Tier" source="resiliencyTier" />
            <TextField label="Support" source="support" />
            <TextField
              label="Support Organization"
              source="supportOrganization"
            />
            <TextField label="Support Tier" source="supportTier" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attestation"
          target="app_id"
          label="Attestations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
            <BooleanField
              label="Has Sensitive Data"
              source="hasSensitiveData"
            />
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
            <TextField
              label="Owning Organization"
              source="owningOrganization"
            />
            <TextField
              label="Primary Contact Email"
              source="primaryContactEmail"
            />
            <TextField
              label="Primary Contact Nuid"
              source="primaryContactNuid"
            />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
