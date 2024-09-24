import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AssetTitle } from "../asset/AssetTitle";

export const RebootWindowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput
          label="Reboot Window Available Day Of Week"
          source="rebootWindowAvailableDayOfWeek"
        />
        <TextInput
          label="Reboot Window Available Months"
          source="rebootWindowAvailableMonths"
        />
        <TextInput
          label="Reboot Window Available Weeks Of Month"
          source="rebootWindowAvailableWeeksOfMonth"
        />
        <TextInput
          label="Reboot Window Close Time"
          source="rebootWindowCloseTime"
        />
        <TextInput
          label="Reboot Window Open Time"
          source="rebootWindowOpenTime"
        />
      </SimpleForm>
    </Create>
  );
};
