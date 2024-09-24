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

export const PatchChannelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PatchChannels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is User Selectable" source="isUserSelectable" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="Operating System" source="operatingSystem" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
