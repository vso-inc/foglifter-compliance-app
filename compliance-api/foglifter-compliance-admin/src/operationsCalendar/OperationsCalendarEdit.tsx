import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { AssetTitle } from "../asset/AssetTitle";
import { ContactTitle } from "../contact/ContactTitle";
import { OperationsCalendarStatusTitle } from "../operationsCalendarStatus/OperationsCalendarStatusTitle";

export const OperationsCalendarEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="asset.id" reference="Asset" label="Asset">
          <SelectInput optionText={AssetTitle} />
        </ReferenceInput>
        <TextInput label="Change Coordinator" source="changeCoordinator" />
        <TextInput label="Change Manager" source="changeManager" />
        <TextInput label="Change Request" source="changeRequest" />
        <ReferenceInput source="contact.id" reference="Contact" label="Contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
        <TextInput label="Development Manager" source="developmentManager" />
        <DateTimeInput label="Last Patched" source="lastPatched" />
        <DateTimeInput label="Locked" source="locked" />
        <TextInput label="Locked By" source="lockedBy" />
        <TextInput label="Note" source="note" />
        <ReferenceInput
          source="operationsCalendarStatus.id"
          reference="OperationsCalendarStatus"
          label="Operations Calendar Status"
        >
          <SelectInput optionText={OperationsCalendarStatusTitle} />
        </ReferenceInput>
        <TextInput label="Project Manager" source="projectManager" />
        <NumberInput step={1} label="Reason Code" source="reasonCode" />
        <DateTimeInput label="Scheduled" source="scheduled" />
        <TextInput label="Scheduled By" source="scheduledBy" />
        <NumberInput step={1} label="Service Id" source="serviceId" />
        <TextInput label="Technical Lead" source="technicalLead" />
        <TextInput label="Updated By" source="updatedBy" />
      </SimpleForm>
    </Edit>
  );
};
