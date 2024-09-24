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
import { AssetTitle } from "../asset/AssetTitle";

export const ApplicationDeploymentEdit = (
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
    </Edit>
  );
};
