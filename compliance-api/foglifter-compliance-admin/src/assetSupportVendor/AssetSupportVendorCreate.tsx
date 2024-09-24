import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AssetSupportDetailTitle } from "../assetSupportDetail/AssetSupportDetailTitle";

export const AssetSupportVendorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assetSupportDetails"
          reference="AssetSupportDetail"
        >
          <SelectArrayInput
            optionText={AssetSupportDetailTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput
          label="Support Vendor Contact Email"
          source="supportVendorContactEmail"
        />
        <TextInput
          label="Support Vendor Contact Fax"
          source="supportVendorContactFax"
        />
        <TextInput
          label="Support Vendor Contact Name"
          source="supportVendorContactName"
        />
        <TextInput
          label="Support Vendor Contact Notes"
          source="supportVendorContactNotes"
        />
        <TextInput
          label="Support Vendor Contact Phone"
          source="supportVendorContactPhone"
        />
        <TextInput label="Support Vendor Name" source="supportVendorName" />
      </SimpleForm>
    </Create>
  );
};
