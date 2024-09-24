import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PATCHCHANNEL_TITLE_FIELD } from "../patchChannel/PatchChannelTitle";

export const PatchChannelFixletList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PatchChannelFixlets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
