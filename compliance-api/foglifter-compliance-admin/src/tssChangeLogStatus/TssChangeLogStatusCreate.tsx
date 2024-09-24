import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TssChangeLogTitle } from "../tssChangeLog/TssChangeLogTitle";

export const TssChangeLogStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Status" source="status" />
        <ReferenceArrayInput source="tssChangeLog" reference="TssChangeLog">
          <SelectArrayInput
            optionText={TssChangeLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
