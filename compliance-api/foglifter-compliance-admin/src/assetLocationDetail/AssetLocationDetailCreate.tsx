import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const AssetLocationDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <BooleanInput label="In Data Center" source="inDataCenter" />
        <TextInput label="Location Building" source="locationBuilding" />
        <TextInput label="Location Code" source="locationCode" />
        <TextInput label="Location Floor" source="locationFloor" />
        <TextInput label="Location Full" source="locationFull" />
        <TextInput label="Location Grid" source="locationGrid" />
        <TextInput label="Location Physical" source="locationPhysical" />
        <TextInput label="Region" source="region" />
        <TextInput label="Service Area" source="serviceArea" />
      </SimpleForm>
    </Create>
  );
};
