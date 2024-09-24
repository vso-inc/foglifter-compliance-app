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

export const AssetLocationDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetLocationDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <BooleanField label="In Data Center" source="inDataCenter" />
        <TextField label="Location Building" source="locationBuilding" />
        <TextField label="Location Code" source="locationCode" />
        <TextField label="Location Floor" source="locationFloor" />
        <TextField label="Location Full" source="locationFull" />
        <TextField label="Location Grid" source="locationGrid" />
        <TextField label="Location Physical" source="locationPhysical" />
        <TextField label="Region" source="region" />
        <TextField label="Service Area" source="serviceArea" />
        <DateField source="updated" label="Updated" />{" "}
      </Datagrid>
    </List>
  );
};
