import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ApplicationLifecycleDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Actual Decommission" source="actualDecommission" />
        <TextField label="Actual Retirement" source="actualRetirement" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Decommission Process" source="decommissionProcess" />
        <TextField label="Decommission State" source="decommissionState" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Dr Enabled" source="isDrEnabled" />
        <TextField label="Planned Decommission" source="plannedDecommission" />
        <TextField label="Planned Retirement" source="plannedRetirement" />
      </SimpleShowLayout>
    </Show>
  );
};
