import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BigfixRequestTitle } from "../bigfixRequest/BigfixRequestTitle";

export const BigfixRequestTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="bigfixRequest" reference="BigfixRequest">
          <SelectArrayInput
            optionText={BigfixRequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Request Type" source="requestType" />
      </SimpleForm>
    </Create>
  );
};
