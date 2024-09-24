import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BIGFIXREQUEST_TITLE_FIELD } from "../bigfixRequest/BigfixRequestTitle";
import { SUBMGMTCHANGELOGSTATUS_TITLE_FIELD } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusTitle";

export const SubMgmtChangeLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SubMgmtChangeLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Action" source="action" />
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Bigfix Request"
          source="bigfixrequest.id"
          reference="BigfixRequest"
        >
          <TextField source={BIGFIXREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="Hostname" source="hostname" />
        <TextField label="ID" source="id" />
        <TextField
          label="Patch Channel Include List"
          source="patchChannelIncludeList"
        />
        <ReferenceField
          label="Sub Mgmt Change Log Status"
          source="submgmtchangelogstatus.id"
          reference="SubMgmtChangeLogStatus"
        >
          <TextField source={SUBMGMTCHANGELOGSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
