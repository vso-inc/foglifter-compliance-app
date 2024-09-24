import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { BigfixRequestTitle } from "../bigfixRequest/BigfixRequestTitle";
import { SubMgmtBigfixRequestPatchChannelIncludeListTitle } from "../subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListTitle";
import { SubMgmtChangeLogStatusTitle } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusTitle";

export const SubMgmtChangeLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Action" source="action" />
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="bigfixRequest.id"
          reference="BigfixRequest"
          label="Bigfix Request"
        >
          <SelectInput optionText={BigfixRequestTitle} />
        </ReferenceInput>
        <TextInput label="Hostname" source="hostname" />
        <TextInput
          label="Patch Channel Include List"
          source="patchChannelIncludeList"
        />
        <ReferenceArrayInput
          source="subMgmtBigfixRequestPatchChannelIncludeList"
          reference="SubMgmtBigfixRequestPatchChannelIncludeList"
        >
          <SelectArrayInput
            optionText={SubMgmtBigfixRequestPatchChannelIncludeListTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="subMgmtChangeLogStatus.id"
          reference="SubMgmtChangeLogStatus"
          label="Sub Mgmt Change Log Status"
        >
          <SelectInput optionText={SubMgmtChangeLogStatusTitle} />
        </ReferenceInput>
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
