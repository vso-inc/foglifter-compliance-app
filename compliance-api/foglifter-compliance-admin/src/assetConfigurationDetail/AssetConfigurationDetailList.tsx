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

export const AssetConfigurationDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetConfigurationDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Asset Tag" source="assetTag" />
        <TextField label="Bios" source="bios" />
        <TextField label="Brand" source="brand" />
        <TextField label="Cpu Count" source="cpuCount" />
        <TextField label="Cpu Speed" source="cpuSpeed" />
        <TextField label="Cpu Type" source="cpuType" />
        <TextField label="Cpu Version" source="cpuVersion" />
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField label="In Service" source="inService" />
        <TextField label="Last Hardware Scan" source="lastHardwareScan" />
        <TextField label="Model" source="model" />
        <TextField label="Nature" source="nature" />
        <TextField label="Operating System" source="operatingSystem" />
        <TextField label="Role" source="role" />
        <TextField label="Scan Exempt Reason" source="scanExemptReason" />
        <TextField label="Serial" source="serial" />
        <TextField label="Status" source="status" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updated" label="Updated" />{" "}
      </Datagrid>
    </List>
  );
};
