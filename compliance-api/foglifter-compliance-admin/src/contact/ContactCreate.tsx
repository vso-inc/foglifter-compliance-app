import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ApplicationContactTitle } from "../applicationContact/ApplicationContactTitle";
import { OperationsCalendarTitle } from "../operationsCalendar/OperationsCalendarTitle";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="applicationContact"
          reference="ApplicationContact"
        >
          <SelectArrayInput
            optionText={ApplicationContactTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Department" source="department" />
        <TextInput label="Email" source="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Nuid" source="nuid" />
        <ReferenceArrayInput
          source="operationsCalendar"
          reference="OperationsCalendar"
        >
          <SelectArrayInput
            optionText={OperationsCalendarTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Reports To" source="reportsTo" />
        <TextInput label="Title" source="title" />
        <TextInput label="Updated By" source="updatedBy" />
        <TextInput label="Work Phone" source="workPhone" />
      </SimpleForm>
    </Create>
  );
};
