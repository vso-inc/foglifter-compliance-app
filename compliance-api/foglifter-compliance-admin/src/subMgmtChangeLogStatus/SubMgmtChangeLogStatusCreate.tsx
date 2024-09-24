import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubMgmtChangeLogTitle } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";

export const SubMgmtChangeLogStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Status" source="status" />
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
      </SimpleForm>
    </Create>
  );
};
