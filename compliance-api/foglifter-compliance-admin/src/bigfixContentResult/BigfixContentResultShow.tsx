import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const BigfixContentResultShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Applicable" source="applicable" />
        <TextField label="Content Id" source="contentId" />
        <DateField source="created" label="Created" />
        <TextField label="Datasource Device Id" source="datasourceDeviceId" />
        <TextField label="Datasource Site Id" source="datasourceSiteId" />
        <TextField label="First Relevant" source="firstRelevant" />
        <TextField label="ID" source="id" />
        <TextField label="Last Non Relevant" source="lastNonRelevant" />
        <TextField label="Last Relevant" source="lastRelevant" />
        <BooleanField label="Relevant" source="relevant" />
        <BooleanField label="Resolved" source="resolved" />
        <BooleanField label="Reverted" source="reverted" />
        <TextField label="Type Field" source="typeField" />
        <DateField source="updated" label="Updated" />
      </SimpleShowLayout>
    </Show>
  );
};
