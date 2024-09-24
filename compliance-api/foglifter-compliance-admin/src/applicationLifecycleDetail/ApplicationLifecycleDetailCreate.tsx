import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const ApplicationLifecycleDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput
          label="Actual Decommission"
          source="actualDecommission"
        />
        <DateTimeInput label="Actual Retirement" source="actualRetirement" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <TextInput label="Decommission Process" source="decommissionProcess" />
        <TextInput label="Decommission State" source="decommissionState" />
        <BooleanInput label="Is Dr Enabled" source="isDrEnabled" />
        <DateTimeInput
          label="Planned Decommission"
          source="plannedDecommission"
        />
        <DateTimeInput label="Planned Retirement" source="plannedRetirement" />
      </SimpleForm>
    </Create>
  );
};
