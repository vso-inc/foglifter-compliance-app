import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTESTATIONHOST_TITLE_FIELD } from "../attestationHost/AttestationHostTitle";
import { PATCHCHANNELFIXLET_TITLE_FIELD } from "./PatchChannelFixletTitle";
import { PATCHCHANNEL_TITLE_FIELD } from "../patchChannel/PatchChannelTitle";

export const PatchChannelFixletShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Common Platform Enumeration Tag"
          source="commonPlatformEnumerationTag"
        />
        <DateField source="created" label="Created" />
        <TextField label="Fixlet Category" source="fixletCategory" />
        <TextField label="Fixlet Name" source="fixletName" />
        <TextField
          label="Fixlet Source Released"
          source="fixletSourceReleased"
        />
        <TextField label="Fixlet Tag" source="fixletTag" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Patch Channel"
          source="patchchannel.id"
          reference="PatchChannel"
        >
          <TextField source={PATCHCHANNEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Relevant Count" source="relevantCount" />
        <TextField label="Site" source="site" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="AttestationHostFixlet"
          target="patch_channel_fixlet_id"
          label="AttestationHostFixlets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
