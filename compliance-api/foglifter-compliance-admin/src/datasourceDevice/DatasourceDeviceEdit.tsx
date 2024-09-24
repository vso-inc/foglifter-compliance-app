import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";

export const DatasourceDeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Datasource Id" source="datasourceId" />
        <BooleanInput label="Is Deleted" source="isDeleted" />
        <BooleanInput label="Is Locked" source="isLocked" />
        <DateTimeInput label="Last Report Sent" source="lastReportSent" />
        <DateTimeInput label="Last Report Time" source="lastReportTime" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Report Number" source="reportNumber" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
