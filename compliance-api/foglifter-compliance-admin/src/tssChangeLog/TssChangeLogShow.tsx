import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BIGFIXREQUEST_TITLE_FIELD } from "../bigfixRequest/BigfixRequestTitle";
import { TSSCHANGELOGSTATUS_TITLE_FIELD } from "../tssChangeLogStatus/TssChangeLogStatusTitle";

export const TssChangeLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
