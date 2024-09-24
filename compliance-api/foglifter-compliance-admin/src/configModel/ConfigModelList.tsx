import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConfigModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ConfigModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Config Name" source="configName" />
        <TextField label="Config Value" source="configValue" />
        <DateField source="created" label="Created" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
