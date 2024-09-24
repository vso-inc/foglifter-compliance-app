import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ConfigModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Config Name" source="configName" />
        <TextInput label="Config Value" source="configValue" />
        <TextInput label="Description" source="description" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Create>
  );
};
