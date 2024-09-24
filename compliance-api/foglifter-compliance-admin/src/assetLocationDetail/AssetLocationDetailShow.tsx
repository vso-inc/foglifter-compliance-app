import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const AssetLocationDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updated" label="Updated" />
      </SimpleShowLayout>
    </Show>
  );
};
