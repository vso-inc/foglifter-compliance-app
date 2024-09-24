import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ASSETSUPPORTVENDOR_TITLE_FIELD } from "./AssetSupportVendorTitle";

export const AssetSupportVendorShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField
          label="Support Vendor Contact Email"
          source="supportVendorContactEmail"
        />
        <TextField
          label="Support Vendor Contact Fax"
          source="supportVendorContactFax"
        />
        <TextField
          label="Support Vendor Contact Name"
          source="supportVendorContactName"
        />
        <TextField
          label="Support Vendor Contact Notes"
          source="supportVendorContactNotes"
        />
        <TextField
          label="Support Vendor Contact Phone"
          source="supportVendorContactPhone"
        />
        <TextField label="Support Vendor Name" source="supportVendorName" />
        <DateField source="updated" label="Updated" />
        <ReferenceManyField
          reference="AssetSupportDetail"
          target="support_vendor_id"
          label="AssetSupportDetails"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Activity Based Costing"
              source="activityBasedCosting"
            />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Asset Support Vendor"
              source="assetsupportvendor.id"
              reference="AssetSupportVendor"
            >
              <TextField source={ASSETSUPPORTVENDOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField label="Resource Unit Id" source="resourceUnitId" />
            <TextField
              label="Support Contract End Date"
              source="supportContractEndDate"
            />
            <TextField label="Support Contract Id" source="supportContractId" />
            <TextField
              label="Support Contract Renewal Cost"
              source="supportContractRenewalCost"
            />
            <TextField
              label="Support Contract Renewal Date"
              source="supportContractRenewalDate"
            />
            <TextField
              label="Support Contract Renewal Notes"
              source="supportContractRenewalNotes"
            />
            <TextField
              label="Support Contract Renewal Term"
              source="supportContractRenewalTerm"
            />
            <TextField
              label="Support Contract Start Date"
              source="supportContractStartDate"
            />
            <DateField source="updated" label="Updated" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
