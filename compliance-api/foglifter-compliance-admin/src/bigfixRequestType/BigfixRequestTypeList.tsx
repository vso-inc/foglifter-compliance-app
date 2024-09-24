import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BigfixRequestTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BigfixRequestTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="Request Type" source="requestType" />{" "}
      </Datagrid>
    </List>
  );
};
