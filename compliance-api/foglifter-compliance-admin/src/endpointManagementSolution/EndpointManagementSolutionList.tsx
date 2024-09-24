import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ENVIRONMENT_TITLE_FIELD } from "../environment/EnvironmentTitle";

export const EndpointManagementSolutionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EndpointManagementSolutions"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Name" source="name" />{" "}
      </Datagrid>
    </List>
  );
};
