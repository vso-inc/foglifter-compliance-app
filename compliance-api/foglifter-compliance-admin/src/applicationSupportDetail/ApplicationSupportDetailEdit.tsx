import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const ApplicationSupportDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <TextInput
          label="Business Required Recovery Point Objective"
          source="businessRequiredRecoveryPointObjective"
        />
        <TextInput
          label="Business Required Recovery Time Objective"
          source="businessRequiredRecoveryTimeObjective"
        />
        <TextInput
          label="Infrastructure Support"
          source="infrastructureSupport"
        />
        <TextInput label="Owning Organization" source="owningOrganization" />
        <TextInput
          label="Owning Sub Organization"
          source="owningSubOrganization"
        />
        <TextInput
          label="Recovery Point Capability"
          source="recoveryPointCapability"
        />
        <TextInput
          label="Recovery Time Capability"
          source="recoveryTimeCapability"
        />
        <TextInput label="Resiliency Tier" source="resiliencyTier" />
        <TextInput label="Support" source="support" />
        <TextInput label="Support Organization" source="supportOrganization" />
        <TextInput label="Support Tier" source="supportTier" />
      </SimpleForm>
    </Edit>
  );
};
