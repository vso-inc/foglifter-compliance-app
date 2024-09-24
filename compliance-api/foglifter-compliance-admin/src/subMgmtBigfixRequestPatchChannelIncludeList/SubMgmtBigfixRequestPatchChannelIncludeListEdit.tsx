import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PatchChannelTitle } from "../patchChannel/PatchChannelTitle";
import { SubMgmtChangeLogTitle } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";

export const SubMgmtBigfixRequestPatchChannelIncludeListEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="patchChannel.id"
          reference="PatchChannel"
          label="Patch Channel"
        >
          <SelectInput optionText={PatchChannelTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="subMgmtChangeLog.id"
          reference="SubMgmtChangeLog"
          label="Sub Mgmt Change Log"
        >
          <SelectInput optionText={SubMgmtChangeLogTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
