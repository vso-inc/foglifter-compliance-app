import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const SubnetList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Subnets"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Note" source="note" />
        <TextField label="Purpose" source="purpose" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
