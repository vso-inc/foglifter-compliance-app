import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { OperationsCalendarTitle } from "../operationsCalendar/OperationsCalendarTitle";

export const OperationsCalendarStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
