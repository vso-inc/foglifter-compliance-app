import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ConfigModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Config Name" source="configName" />
        <TextInput label="Config Value" source="configValue" />
        <TextInput label="Description" source="description" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
