import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PATCHCHANNEL_TITLE_FIELD } from "../patchChannel/PatchChannelTitle";
import { SUBMGMTCHANGELOG_TITLE_FIELD } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";

export const SubMgmtBigfixRequestPatchChannelIncludeListList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SubMgmtBigfixRequestPatchChannelIncludeLists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Patch Channel"
          source="patchchannel.id"
          reference="PatchChannel"
        >
          <TextField source={PATCHCHANNEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Sub Mgmt Change Log"
          source="submgmtchangelog.id"
          reference="SubMgmtChangeLog"
        >
          <TextField source={SUBMGMTCHANGELOG_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
