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
import { BIGFIXREQUESTTYPE_TITLE_FIELD } from "../bigfixRequestType/BigfixRequestTypeTitle";

export const BigfixRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BigfixRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Action Script Id" source="actionScriptId" />
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Bigfix Environment" source="bigfixEnvironment" />
        <ReferenceField
          label="Bigfix Request Type"
          source="bigfixrequesttype.id"
          reference="BigfixRequestType"
        >
          <TextField source={BIGFIXREQUESTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Computer Id" source="computerId" />
        <TextField label="Computer Status" source="computerStatus" />
        <DateField source="created" label="Created" />
        <TextField label="Http Response" source="httpResponse" />
        <TextField label="Http Response Message" source="httpResponseMessage" />
        <TextField label="ID" source="id" />
        <TextField label="Request" source="request" />
        <TextField
          label="Request Computer Settings"
          source="requestComputerSettings"
        />
        <TextField label="Request Status" source="requestStatus" />
        <TextField label="Response" source="response" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
