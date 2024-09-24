import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { OperationsCalendarTitle } from "../operationsCalendar/OperationsCalendarTitle";

export const OperationsCalendarStatusEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
