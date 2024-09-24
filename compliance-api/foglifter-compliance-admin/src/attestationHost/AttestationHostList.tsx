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
import { ATTESTATION_TITLE_FIELD } from "../attestation/AttestationTitle";

export const AttestationHostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AttestationHosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Attestation"
          source="attestation.id"
          reference="Attestation"
        >
          <TextField source={ATTESTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="Is Supported By Third Party"
          source="isSupportedByThirdParty"
        />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
