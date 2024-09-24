import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AttestationHostTitle } from "../attestationHost/AttestationHostTitle";
import { PatchChannelFixletTitle } from "../patchChannelFixlet/PatchChannelFixletTitle";

export const AttestationHostFixletEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attestationHost.id"
          reference="AttestationHost"
          label="Attestation Host"
        >
          <SelectInput optionText={AttestationHostTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Checklist Id" source="checklistId" />
        <TextInput label="Checklist Name" source="checklistName" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="patchChannelFixlet.id"
          reference="PatchChannelFixlet"
          label="Patch Channel Fixlet"
        >
          <SelectInput optionText={PatchChannelFixletTitle} />
        </ReferenceInput>
        <TextInput label="Tss Spec" source="tssSpec" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
