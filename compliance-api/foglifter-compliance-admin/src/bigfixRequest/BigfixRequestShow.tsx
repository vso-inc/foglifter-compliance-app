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
  BooleanField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BIGFIXREQUEST_TITLE_FIELD } from "./BigfixRequestTitle";
import { SUBMGMTCHANGELOGSTATUS_TITLE_FIELD } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusTitle";
import { TSSCHANGELOGSTATUS_TITLE_FIELD } from "../tssChangeLogStatus/TssChangeLogStatusTitle";
import { BIGFIXREQUESTTYPE_TITLE_FIELD } from "../bigfixRequestType/BigfixRequestTypeTitle";

export const BigfixRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Action Script Id" source="actionScriptId" />
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Bigfix Environment" source="bigfixEnvironment" />
        <ReferenceField
          label="Bigfix Request Type"
          source="bigfixrequesttype.id"
          reference="BigfixRequestType"
        >
          <TextField source={BIGFIXREQUESTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Computer Id" source="computerId" />
        <TextField label="Computer Status" source="computerStatus" />
        <DateField source="created" label="Created" />
        <TextField label="Http Response" source="httpResponse" />
        <TextField label="Http Response Message" source="httpResponseMessage" />
        <TextField label="ID" source="id" />
        <TextField label="Request" source="request" />
        <TextField
          label="Request Computer Settings"
          source="requestComputerSettings"
        />
        <TextField label="Request Status" source="requestStatus" />
        <TextField label="Response" source="response" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="SubMgmtChangeLog"
          target="bigfix_request_id"
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
        <ReferenceManyField
          reference="TssChangeLog"
          target="bigfix_request_id"
          label="TssChangeLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <TextField label="Apply On" source="applyOn" />
            <BooleanField
              label="Apply On Next Scheduled Maint Window"
              source="applyOnNextScheduledMaintWindow"
            />
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
            <TextField label="ID" source="id" />
            <TextField
              label="Remediation Window Hours"
              source="remediationWindowHours"
            />
            <ReferenceField
              label="Tss Change Log Status"
              source="tsschangelogstatus.id"
              reference="TssChangeLogStatus"
            >
              <TextField source={TSSCHANGELOGSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tss Include List" source="tssIncludeList" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
