import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EndpointManagementSolutionTitle } from "../endpointManagementSolution/EndpointManagementSolutionTitle";

export const EnvironmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="endpointManagementSolution"
          reference="EndpointManagementSolution"
        >
          <SelectArrayInput
            optionText={EndpointManagementSolutionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Environment Desc" source="environmentDesc" />
        <TextInput label="Environment Name" source="environmentName" />
      </SimpleForm>
    </Create>
  );
};
