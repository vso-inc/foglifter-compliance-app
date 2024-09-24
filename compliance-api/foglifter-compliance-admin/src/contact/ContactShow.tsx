import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { CONTACT_TITLE_FIELD } from "./ContactTitle";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";
import { OPERATIONSCALENDARSTATUS_TITLE_FIELD } from "../operationsCalendarStatus/OperationsCalendarStatusTitle";

export const ContactShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="created" label="Created" />
        <TextField label="Department" source="department" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Nuid" source="nuid" />
        <TextField label="Reports To" source="reportsTo" />
        <TextField label="Title" source="title" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <TextField label="Work Phone" source="workPhone" />
        <ReferenceManyField
          reference="ApplicationContact"
          target="contact_id"
          label="ApplicationContacts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Application Id" source="applicationId" />
            <ReferenceField
              label="Contact"
              source="contact.id"
              reference="Contact"
            >
              <TextField source={CONTACT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="created" label="Created" />
            <TextField label="ID" source="id" />
            <TextField label="Role Ends" source="roleEnds" />
            <TextField label="Role Starts" source="roleStarts" />
            <TextField label="Role Type" source="roleType" />
            <DateField source="updated" label="Updated" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OperationsCalendar"
          target="primary_contact_id"
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
