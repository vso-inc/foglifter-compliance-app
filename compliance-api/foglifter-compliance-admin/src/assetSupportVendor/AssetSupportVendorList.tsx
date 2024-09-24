import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetSupportVendorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetSupportVendors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField
          label="Support Vendor Contact Email"
          source="supportVendorContactEmail"
        />
        <TextField
          label="Support Vendor Contact Fax"
          source="supportVendorContactFax"
        />
        <TextField
          label="Support Vendor Contact Name"
          source="supportVendorContactName"
        />
        <TextField
          label="Support Vendor Contact Notes"
          source="supportVendorContactNotes"
        />
        <TextField
          label="Support Vendor Contact Phone"
          source="supportVendorContactPhone"
        />
        <TextField label="Support Vendor Name" source="supportVendorName" />
        <DateField source="updated" label="Updated" />{" "}
      </Datagrid>
    </List>
  );
};
