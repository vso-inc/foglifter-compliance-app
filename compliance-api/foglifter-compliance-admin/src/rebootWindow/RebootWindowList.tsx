import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ASSET_TITLE_FIELD } from "../asset/AssetTitle";

export const RebootWindowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"RebootWindows"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updated" label="Updated" />{" "}
      </Datagrid>
    </List>
  );
};
