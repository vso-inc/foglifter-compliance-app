import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const MaintenanceWindowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField
          label="Maint Window Available Day Of Week"
          source="maintWindowAvailableDayOfWeek"
        />
        <TextField
          label="Maint Window Available Months"
          source="maintWindowAvailableMonths"
        />
        <TextField
          label="Maint Window Available Weeks Of Month"
          source="maintWindowAvailableWeeksOfMonth"
        />
        <TextField
          label="Maint Window Close Time"
          source="maintWindowCloseTime"
        />
        <TextField
          label="Maint Window Last Inside"
          source="maintWindowLastInside"
        />
        <TextField
          label="Maint Window Level Of Support"
          source="maintWindowLevelOfSupport"
        />
        <TextField
          label="Maint Window Open Time"
          source="maintWindowOpenTime"
        />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
      </SimpleShowLayout>
    </Show>
  );
};
