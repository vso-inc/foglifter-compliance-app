import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EnvironmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Environments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Environment Desc" source="environmentDesc" />
        <TextField label="Environment Name" source="environmentName" />
        <TextField label="ID" source="id" />{" "}
      </Datagrid>
    </List>
  );
};
