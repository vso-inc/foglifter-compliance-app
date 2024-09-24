import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const SubnetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Note" source="note" />
        <TextInput label="Purpose" source="purpose" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
