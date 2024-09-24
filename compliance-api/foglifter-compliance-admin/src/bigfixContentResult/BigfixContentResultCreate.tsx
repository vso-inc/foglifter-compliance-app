import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const BigfixContentResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Applicable" source="applicable" />
        <NumberInput step={1} label="Content Id" source="contentId" />
        <NumberInput
          step={1}
          label="Datasource Device Id"
          source="datasourceDeviceId"
        />
        <NumberInput
          step={1}
          label="Datasource Site Id"
          source="datasourceSiteId"
        />
        <DateTimeInput label="First Relevant" source="firstRelevant" />
        <DateTimeInput label="Last Non Relevant" source="lastNonRelevant" />
        <DateTimeInput label="Last Relevant" source="lastRelevant" />
        <BooleanInput label="Relevant" source="relevant" />
        <BooleanInput label="Resolved" source="resolved" />
        <BooleanInput label="Reverted" source="reverted" />
        <NumberInput step={1} label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
