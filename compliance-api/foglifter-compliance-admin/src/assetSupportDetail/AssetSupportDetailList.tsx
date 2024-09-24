import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ASSETSUPPORTVENDOR_TITLE_FIELD } from "../assetSupportVendor/AssetSupportVendorTitle";

export const AssetSupportDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AssetSupportDetails"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updated" label="Updated" />{" "}
      </Datagrid>
    </List>
  );
};
