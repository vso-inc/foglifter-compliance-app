import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AttestationHostFixletTitle } from "../attestationHostFixlet/AttestationHostFixletTitle";
import { PatchChannelTitle } from "../patchChannel/PatchChannelTitle";

export const PatchChannelFixletEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attestationHostFixlet"
          reference="AttestationHostFixlet"
        >
          <SelectArrayInput
            optionText={AttestationHostFixletTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput
          label="Common Platform Enumeration Tag"
          source="commonPlatformEnumerationTag"
        />
        <TextInput label="Fixlet Category" source="fixletCategory" />
        <TextInput label="Fixlet Name" source="fixletName" />
        <DateTimeInput
          label="Fixlet Source Released"
          source="fixletSourceReleased"
        />
        <TextInput label="Fixlet Tag" source="fixletTag" />
        <ReferenceInput
          source="patchChannel.id"
          reference="PatchChannel"
          label="Patch Channel"
        >
          <SelectInput optionText={PatchChannelTitle} />
        </ReferenceInput>
        <TextInput label="Relevant Count" source="relevantCount" />
        <TextInput label="Site" source="site" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
