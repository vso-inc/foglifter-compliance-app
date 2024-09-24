import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { AssetSupportVendorTitle } from "../assetSupportVendor/AssetSupportVendorTitle";

export const AssetSupportDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Activity Based Costing"
          source="activityBasedCosting"
        />
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="assetSupportVendor.id"
          reference="AssetSupportVendor"
          label="Asset Support Vendor"
        >
          <SelectInput optionText={AssetSupportVendorTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Resource Unit Id"
          source="resourceUnitId"
        />
        <DateTimeInput
          label="Support Contract End Date"
          source="supportContractEndDate"
        />
        <NumberInput
          step={1}
          label="Support Contract Id"
          source="supportContractId"
        />
        <NumberInput
          label="Support Contract Renewal Cost"
          source="supportContractRenewalCost"
        />
        <DateTimeInput
          label="Support Contract Renewal Date"
          source="supportContractRenewalDate"
        />
        <TextInput
          label="Support Contract Renewal Notes"
          source="supportContractRenewalNotes"
        />
        <TextInput
          label="Support Contract Renewal Term"
          source="supportContractRenewalTerm"
        />
        <DateTimeInput
          label="Support Contract Start Date"
          source="supportContractStartDate"
        />
      </SimpleForm>
    </Create>
  );
};
