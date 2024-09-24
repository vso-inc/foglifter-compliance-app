import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
  BooleanField,
} from "react-admin";

import { ENDPOINTMANAGEMENTSOLUTION_TITLE_FIELD } from "./EndpointManagementSolutionTitle";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const EndpointManagementSolutionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Environment"
          source="environment.id"
          reference="Environment"
        >
          <TextField source={ENVIRONMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceManyField
          reference="Asset"
          target="endpoint_management_solution_id"
          label="Assets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Alt Id" source="altId" />
            <TextField label="App Server Id" source="appServerId" />
            <TextField label="Application Host Id" source="applicationHostId" />
            <TextField label="Assigned" source="assigned" />
            <DateField source="created" label="Created" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Endpoint Management Solution"
              source="endpointmanagementsolution.id"
              reference="EndpointManagementSolution"
            >
              <TextField source={ENDPOINTMANAGEMENTSOLUTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Enterprise Id" source="enterpriseId" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Locked" source="isLocked" />
            <BooleanField label="Is Shared" source="isShared" />
            <TextField label="Note" source="note" />
            <TextField label="System Backup Id" source="systemBackupId" />
            <TextField label="System Citrix Id" source="systemCitrixId" />
            <TextField label="Tag" source="tag" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
