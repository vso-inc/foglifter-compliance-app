import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ASSETNETWORKDETAIL_TITLE_FIELD } from "../assetNetworkDetail/AssetNetworkDetailTitle";

export const IpAddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"IpAddresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Asset Network Details"
          source="assetnetworkdetail.id"
          reference="AssetNetworkDetail"
        >
          <TextField source={ASSETNETWORKDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="Dns Name" source="dnsName" />
        <TextField label="ID" source="id" />
        <TextField label="Ip" source="ip" />
        <BooleanField label="Is Primary" source="isPrimary" />
        <TextField label="Subnet Purpose" source="subnetPurpose" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
