import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTESTATIONHOST_TITLE_FIELD } from "../attestationHost/AttestationHostTitle";
import { PATCHCHANNELFIXLET_TITLE_FIELD } from "../patchChannelFixlet/PatchChannelFixletTitle";

export const AttestationHostFixletList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AttestationHostFixlets"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
