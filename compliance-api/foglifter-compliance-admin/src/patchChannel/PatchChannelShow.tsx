import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PATCHCHANNEL_TITLE_FIELD } from "./PatchChannelTitle";
import { SUBMGMTCHANGELOG_TITLE_FIELD } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";

export const PatchChannelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is User Selectable" source="isUserSelectable" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="Operating System" source="operatingSystem" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="PatchChannelFixlet"
          target="patch_channel_id"
          label="PatchChannelFixlets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField
              label="Common Platform Enumeration Tag"
              source="commonPlatformEnumerationTag"
            />
            <DateField source="created" label="Created" />
            <TextField label="Fixlet Category" source="fixletCategory" />
            <TextField label="Fixlet Name" source="fixletName" />
            <TextField
              label="Fixlet Source Released"
              source="fixletSourceReleased"
            />
            <TextField label="Fixlet Tag" source="fixletTag" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Patch Channel"
              source="patchchannel.id"
              reference="PatchChannel"
            >
              <TextField source={PATCHCHANNEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Relevant Count" source="relevantCount" />
            <TextField label="Site" source="site" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SubMgmtBigfixRequestPatchChannelIncludeList"
          target="patch_channel_id"
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
