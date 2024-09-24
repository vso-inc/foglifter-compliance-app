import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BigfixRequestTitle } from "../bigfixRequest/BigfixRequestTitle";

export const BigfixRequestTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
