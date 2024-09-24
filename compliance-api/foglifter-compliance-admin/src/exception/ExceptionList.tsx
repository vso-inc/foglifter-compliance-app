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
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const ExceptionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Exceptions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="Exception End" source="exceptionEnd" />
        <TextField label="Exception Reason" source="exceptionReason" />
        <TextField label="Exception Start" source="exceptionStart" />
        <TextField label="Exception Type" source="exceptionType" />
        <TextField label="ID" source="id" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
