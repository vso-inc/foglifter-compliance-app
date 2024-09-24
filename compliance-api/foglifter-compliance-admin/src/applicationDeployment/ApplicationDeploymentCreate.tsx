import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";
import { AssetTitle } from "../asset/AssetTitle";

export const ApplicationDeploymentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput label="Deployment Id" source="deploymentId" />
        <TextInput label="Deployment Name" source="deploymentName" />
        <TextInput label="Deployment Note" source="deploymentNote" />
        <TextInput label="Deployment Status" source="deploymentStatus" />
        <TextInput label="Deployment Type" source="deploymentType" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
