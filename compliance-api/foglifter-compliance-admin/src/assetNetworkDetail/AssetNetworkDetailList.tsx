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

export const AssetNetworkDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetNetworkDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="Dns Name" source="dnsName" />
        <TextField label="Domain" source="domain" />
        <TextField label="Hostname" source="hostname" />
        <TextField label="ID" source="id" />
        <TextField label="Mac Address" source="macAddress" />
        <TextField label="Member Of Cluster" source="memberOfCluster" />
        <TextField label="Previous Hostname" source="previousHostname" />
        <TextField label="Primary Mac Address" source="primaryMacAddress" />
        <DateField source="updated" label="Updated" />{" "}
      </Datagrid>
    </List>
  );
};
