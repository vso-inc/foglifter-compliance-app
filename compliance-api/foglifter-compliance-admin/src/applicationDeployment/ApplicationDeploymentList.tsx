import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const ApplicationDeploymentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ApplicationDeployments"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
