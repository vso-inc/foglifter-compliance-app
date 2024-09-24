import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
} from "react-admin";

import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { BIGFIXREQUESTTYPE_TITLE_FIELD } from "./BigfixRequestTypeTitle";

export const BigfixRequestTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Request Type" source="requestType" />
        <ReferenceManyField
          reference="BigfixRequest"
          target="request_type"
          label="BigfixRequests"
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
            <TextField
              label="Http Response Message"
              source="httpResponseMessage"
            />
            <TextField label="ID" source="id" />
            <TextField label="Request" source="request" />
            <TextField
              label="Request Computer Settings"
              source="requestComputerSettings"
            />
            <TextField label="Request Status" source="requestStatus" />
            <TextField label="Response" source="response" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
