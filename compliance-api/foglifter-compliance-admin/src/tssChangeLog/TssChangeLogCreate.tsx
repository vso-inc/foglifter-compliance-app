import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { BigfixRequestTitle } from "../bigfixRequest/BigfixRequestTitle";
import { TssChangeLogStatusTitle } from "../tssChangeLogStatus/TssChangeLogStatusTitle";

export const TssChangeLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Action" source="action" />
        <DateTimeInput label="Apply On" source="applyOn" />
        <BooleanInput
          label="Apply On Next Scheduled Maint Window"
          source="applyOnNextScheduledMaintWindow"
        />
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="bigfixRequest.id"
          reference="BigfixRequest"
          label="Bigfix Request"
        >
          <SelectInput optionText={BigfixRequestTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Remediation Window Hours"
          source="remediationWindowHours"
        />
        <ReferenceInput
          source="tssChangeLogStatus.id"
          reference="TssChangeLogStatus"
          label="Tss Change Log Status"
        >
          <SelectInput optionText={TssChangeLogStatusTitle} />
        </ReferenceInput>
        <TextInput label="Tss Include List" source="tssIncludeList" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
