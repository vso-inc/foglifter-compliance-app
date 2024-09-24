import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTESTATIONHOST_TITLE_FIELD } from "./AttestationHostTitle";
import { PATCHCHANNELFIXLET_TITLE_FIELD } from "../patchChannelFixlet/PatchChannelFixletTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { ATTESTATION_TITLE_FIELD } from "../attestation/AttestationTitle";

export const AttestationHostShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Attestation"
          source="attestation.id"
          reference="Attestation"
        >
          <TextField source={ATTESTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <BooleanField
          label="Is Supported By Third Party"
          source="isSupportedByThirdParty"
        />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField
          reference="AttestationHostFixlet"
          target="attestation_host_id"
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
