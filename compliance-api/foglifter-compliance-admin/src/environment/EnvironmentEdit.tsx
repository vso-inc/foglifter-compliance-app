import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { EndpointManagementSolutionTitle } from "../endpointManagementSolution/EndpointManagementSolutionTitle";

export const EnvironmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
