import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BIGFIXREQUEST_TITLE_FIELD } from "../bigfixRequest/BigfixRequestTitle";
import { SUBMGMTCHANGELOGSTATUS_TITLE_FIELD } from "./SubMgmtChangeLogStatusTitle";

export const SubMgmtChangeLogStatusShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <ReferenceManyField
          reference="SubMgmtChangeLog"
          target="status"
          label="SubMgmtChangeLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Bigfix Request"
              source="bigfixrequest.id"
              reference="BigfixRequest"
            >
              <TextField source={BIGFIXREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="Hostname" source="hostname" />
            <TextField label="ID" source="id" />
            <TextField
              label="Patch Channel Include List"
              source="patchChannelIncludeList"
            />
            <ReferenceField
              label="Sub Mgmt Change Log Status"
              source="submgmtchangelogstatus.id"
              reference="SubMgmtChangeLogStatus"
            >
              <TextField source={SUBMGMTCHANGELOGSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
