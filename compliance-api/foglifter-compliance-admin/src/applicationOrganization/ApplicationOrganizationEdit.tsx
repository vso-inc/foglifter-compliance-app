import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const ApplicationOrganizationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Level" source="level" />
        <TextInput label="Name" source="name" />
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
