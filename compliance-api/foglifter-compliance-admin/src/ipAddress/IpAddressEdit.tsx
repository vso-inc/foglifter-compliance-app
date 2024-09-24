import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { AssetNetworkDetailTitle } from "../assetNetworkDetail/AssetNetworkDetailTitle";

export const IpAddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="assetNetworkDetails.id"
          reference="AssetNetworkDetail"
          label="Asset Network Details"
        >
          <SelectInput optionText={AssetNetworkDetailTitle} />
        </ReferenceInput>
        <TextInput label="Dns Name" source="dnsName" />
        <TextInput label="Ip" source="ip" />
        <BooleanInput label="Is Primary" source="isPrimary" />
        <TextInput label="Subnet Purpose" source="subnetPurpose" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
