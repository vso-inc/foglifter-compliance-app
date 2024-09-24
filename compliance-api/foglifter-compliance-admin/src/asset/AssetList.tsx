import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ENDPOINTMANAGEMENTSOLUTION_TITLE_FIELD } from "../endpointManagementSolution/EndpointManagementSolutionTitle";

export const AssetList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Assets"} perPage={50} pagination={<Pagination />}>
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
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
