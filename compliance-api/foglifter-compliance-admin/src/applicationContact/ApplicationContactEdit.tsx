import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";
import { ContactTitle } from "../contact/ContactTitle";

export const ApplicationContactEdit = (
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
        <TextInput label="Application Id" source="applicationId" />
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <DateTimeInput label="Role Ends" source="roleEnds" />
        <DateTimeInput label="Role Starts" source="roleStarts" />
        <TextInput label="Role Type" source="roleType" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
