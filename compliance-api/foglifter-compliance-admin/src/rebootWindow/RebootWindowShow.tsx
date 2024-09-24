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

export const RebootWindowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Asset" source="asset.id" reference="Asset">
          <TextField source={ASSET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="created" label="Created" />
        <TextField label="ID" source="id" />
        <TextField
          label="Reboot Window Available Day Of Week"
          source="rebootWindowAvailableDayOfWeek"
        />
        <TextField
          label="Reboot Window Available Months"
          source="rebootWindowAvailableMonths"
        />
        <TextField
          label="Reboot Window Available Weeks Of Month"
          source="rebootWindowAvailableWeeksOfMonth"
        />
        <TextField
          label="Reboot Window Close Time"
          source="rebootWindowCloseTime"
        />
        <TextField
          label="Reboot Window Open Time"
          source="rebootWindowOpenTime"
        />
        <DateField source="updated" label="Updated" />
      </SimpleShowLayout>
    </Show>
  );
};
