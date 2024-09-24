import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const ExceptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <DateTimeInput label="Exception End" source="exceptionEnd" />
        <TextInput label="Exception Reason" source="exceptionReason" />
        <DateTimeInput label="Exception Start" source="exceptionStart" />
        <TextInput label="Exception Type" source="exceptionType" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
