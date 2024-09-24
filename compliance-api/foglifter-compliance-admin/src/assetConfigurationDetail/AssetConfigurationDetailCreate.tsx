import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const AssetConfigurationDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput label="Asset Tag" source="assetTag" />
        <DateTimeInput label="Bios" source="bios" />
        <TextInput label="Brand" source="brand" />
        <NumberInput step={1} label="Cpu Count" source="cpuCount" />
        <TextInput label="Cpu Speed" source="cpuSpeed" />
        <TextInput label="Cpu Type" source="cpuType" />
        <TextInput label="Cpu Version" source="cpuVersion" />
        <DateTimeInput label="In Service" source="inService" />
        <DateTimeInput label="Last Hardware Scan" source="lastHardwareScan" />
        <TextInput label="Model" source="model" />
        <TextInput label="Nature" source="nature" />
        <TextInput label="Operating System" source="operatingSystem" />
        <TextInput label="Role" source="role" />
        <TextInput label="Scan Exempt Reason" source="scanExemptReason" />
        <TextInput label="Serial" source="serial" />
        <TextInput label="Status" source="status" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
