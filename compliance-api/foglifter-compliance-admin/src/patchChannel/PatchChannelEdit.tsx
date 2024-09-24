import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PatchChannelFixletTitle } from "../patchChannelFixlet/PatchChannelFixletTitle";
import { SubMgmtBigfixRequestPatchChannelIncludeListTitle } from "../subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListTitle";

export const PatchChannelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Is User Selectable" source="isUserSelectable" />
        <TextInput label="Name" source="name" />
        <TextInput label="Note" source="note" />
        <TextInput label="Operating System" source="operatingSystem" />
        <ReferenceArrayInput
          source="patchChannelFixlet"
          reference="PatchChannelFixlet"
        >
          <SelectArrayInput
            optionText={PatchChannelFixletTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
