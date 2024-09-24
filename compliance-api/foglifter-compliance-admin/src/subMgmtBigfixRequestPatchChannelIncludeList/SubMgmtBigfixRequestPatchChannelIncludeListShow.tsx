import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { PATCHCHANNEL_TITLE_FIELD } from "../patchChannel/PatchChannelTitle";
import { SUBMGMTCHANGELOG_TITLE_FIELD } from "../subMgmtChangeLog/SubMgmtChangeLogTitle";

export const SubMgmtBigfixRequestPatchChannelIncludeListShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
