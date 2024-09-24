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
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";

export const ApplicationContactList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ApplicationContacts"}
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
        <TextField label="Application Id" source="applicationId" />
        <ReferenceField label="Contact" source="contact.id" reference="Contact">
          <TextField source={CONTACT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField label="Role Ends" source="roleEnds" />
        <TextField label="Role Starts" source="roleStarts" />
        <TextField label="Role Type" source="roleType" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
