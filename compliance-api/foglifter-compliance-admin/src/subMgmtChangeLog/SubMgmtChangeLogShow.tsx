import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PATCHCHANNEL_TITLE_FIELD } from "../patchChannel/PatchChannelTitle";
import { SUBMGMTCHANGELOG_TITLE_FIELD } from "./SubMgmtChangeLogTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BIGFIXREQUEST_TITLE_FIELD } from "../bigfixRequest/BigfixRequestTitle";
import { SUBMGMTCHANGELOGSTATUS_TITLE_FIELD } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusTitle";

export const SubMgmtChangeLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="SubMgmtBigfixRequestPatchChannelIncludeList"
          target="sub_mgmt_change_log_id"
          label="SubMgmtBigfixRequestPatchChannelIncludeLists"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patch Channel"
              source="patchchannel.id"
              reference="PatchChannel"
            >
              <TextField source={PATCHCHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Sub Mgmt Change Log"
              source="submgmtchangelog.id"
              reference="SubMgmtChangeLog"
            >
              <TextField source={SUBMGMTCHANGELOG_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
