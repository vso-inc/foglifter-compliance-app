import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ATTESTATIONHOST_TITLE_FIELD } from "../attestationHost/AttestationHostTitle";
import { PATCHCHANNELFIXLET_TITLE_FIELD } from "../patchChannelFixlet/PatchChannelFixletTitle";

export const AttestationHostFixletShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Attestation Host"
          source="attestationhost.id"
          reference="AttestationHost"
        >
          <TextField source={ATTESTATIONHOST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Checklist Id" source="checklistId" />
        <TextField label="Checklist Name" source="checklistName" />
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField
          label="Patch Channel Fixlet"
          source="patchchannelfixlet.id"
          reference="PatchChannelFixlet"
        >
          <TextField source={PATCHCHANNELFIXLET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tss Spec" source="tssSpec" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
