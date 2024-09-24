import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ASSETNETWORKDETAIL_TITLE_FIELD } from "./AssetNetworkDetailTitle";

export const AssetNetworkDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updated" label="Updated" />
        <ReferenceManyField
          reference="IpAddress"
          target="asset_network_details_id"
          label="IpAddresses"
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
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
