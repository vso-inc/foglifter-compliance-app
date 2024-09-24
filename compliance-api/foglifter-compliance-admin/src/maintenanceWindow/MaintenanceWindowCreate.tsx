import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const MaintenanceWindowCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput
          label="Maint Window Available Day Of Week"
          source="maintWindowAvailableDayOfWeek"
        />
        <TextInput
          label="Maint Window Available Months"
          source="maintWindowAvailableMonths"
        />
        <TextInput
          label="Maint Window Available Weeks Of Month"
          source="maintWindowAvailableWeeksOfMonth"
        />
        <TextInput
          label="Maint Window Close Time"
          source="maintWindowCloseTime"
        />
        <DateTimeInput
          label="Maint Window Last Inside"
          source="maintWindowLastInside"
        />
        <TextInput
          label="Maint Window Level Of Support"
          source="maintWindowLevelOfSupport"
        />
        <TextInput
          label="Maint Window Open Time"
          source="maintWindowOpenTime"
        />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
