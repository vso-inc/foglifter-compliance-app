import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const ApplicationDeploymentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
