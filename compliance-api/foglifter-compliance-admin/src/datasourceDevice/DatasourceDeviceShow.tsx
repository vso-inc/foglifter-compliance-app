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

export const DatasourceDeviceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="Datasource Id" source="datasourceId" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Deleted" source="isDeleted" />
        <BooleanField label="Is Locked" source="isLocked" />
        <TextField label="Last Report Sent" source="lastReportSent" />
        <TextField label="Last Report Time" source="lastReportTime" />
        <TextField label="Name" source="name" />
        <TextField label="Report Number" source="reportNumber" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
