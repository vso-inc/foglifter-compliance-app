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
import { CONTACT_TITLE_FIELD } from "../contact/ContactTitle";
import { OPERATIONSCALENDARSTATUS_TITLE_FIELD } from "./OperationsCalendarStatusTitle";

export const OperationsCalendarStatusShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <ReferenceManyField
          reference="OperationsCalendar"
          target="status_id"
          label="OperationsCalendars"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Asset" source="asset.id" reference="Asset">
              <TextField source={ASSET_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Change Coordinator" source="changeCoordinator" />
            <TextField label="Change Manager" source="changeManager" />
            <TextField label="Change Request" source="changeRequest" />
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField
              label="Development Manager"
              source="developmentManager"
            />
            <TextField label="ID" source="id" />
            <TextField label="Last Patched" source="lastPatched" />
            <TextField label="Locked" source="locked" />
            <TextField label="Locked By" source="lockedBy" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="Operations Calendar Status"
              source="operationscalendarstatus.id"
              reference="OperationsCalendarStatus"
            >
              <TextField source={OPERATIONSCALENDARSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Project Manager" source="projectManager" />
            <TextField label="Reason Code" source="reasonCode" />
            <TextField label="Scheduled" source="scheduled" />
            <TextField label="Scheduled By" source="scheduledBy" />
            <TextField label="Service Id" source="serviceId" />
            <TextField label="Technical Lead" source="technicalLead" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
