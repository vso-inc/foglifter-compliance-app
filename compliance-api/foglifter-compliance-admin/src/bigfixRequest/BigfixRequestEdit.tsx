import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { BigfixRequestTypeTitle } from "../bigfixRequestType/BigfixRequestTypeTitle";
import { SubMgmtChangeLogTitle } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";
import { TssChangeLogTitle } from "../tssChangeLog/TssChangeLogTitle";

export const BigfixRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Action Script Id"
          source="actionScriptId"
        />
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Bigfix Environment"
          source="bigfixEnvironment"
        />
        <ReferenceInput
          source="bigfixRequestType.id"
          reference="BigfixRequestType"
          label="Bigfix Request Type"
        >
          <SelectInput optionText={BigfixRequestTypeTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Computer Id" source="computerId" />
        <NumberInput step={1} label="Computer Status" source="computerStatus" />
        <TextInput label="Http Response" source="httpResponse" />
        <TextInput label="Http Response Message" source="httpResponseMessage" />
        <TextInput label="Request" source="request" />
        <TextInput
          label="Request Computer Settings"
          source="requestComputerSettings"
        />
        <TextInput label="Request Status" source="requestStatus" />
        <TextInput label="Response" source="response" />
        <ReferenceArrayInput
          source="subMgmtChangeLog"
          reference="SubMgmtChangeLog"
        >
          <SelectArrayInput
            optionText={SubMgmtChangeLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="tssChangeLog" reference="TssChangeLog">
          <SelectArrayInput
            optionText={TssChangeLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
