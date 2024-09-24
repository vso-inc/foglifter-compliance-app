import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PatchChannelTitle } from "../patchChannel/PatchChannelTitle";
import { SubMgmtChangeLogTitle } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";

export const SubMgmtBigfixRequestPatchChannelIncludeListCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
