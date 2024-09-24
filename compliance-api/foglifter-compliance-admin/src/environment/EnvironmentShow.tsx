import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ENVIRONMENT_TITLE_FIELD } from "./EnvironmentTitle";

export const EnvironmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Environment Desc" source="environmentDesc" />
        <TextField label="Environment Name" source="environmentName" />
        <TextField label="ID" source="id" />
        <ReferenceManyField
          reference="EndpointManagementSolution"
          target="env"
          label="EndpointManagementSolutions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Environment"
              source="environment.id"
              reference="Environment"
            >
              <TextField source={ENVIRONMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
