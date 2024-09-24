import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { IpAddressTitle } from "../ipAddress/IpAddressTitle";

export const AssetNetworkDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput label="Dns Name" source="dnsName" />
        <TextInput label="Domain" source="domain" />
        <TextInput label="Hostname" source="hostname" />
        <ReferenceArrayInput source="ipAddress" reference="IpAddress">
          <SelectArrayInput
            optionText={IpAddressTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Mac Address" source="macAddress" />
        <TextInput label="Member Of Cluster" source="memberOfCluster" />
        <TextInput label="Previous Hostname" source="previousHostname" />
        <TextInput label="Primary Mac Address" source="primaryMacAddress" />
      </SimpleForm>
    </Create>
  );
};
