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

export const MaintenanceWindowList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MaintenanceWindows"}
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
        <TextField label="Updated By" source="updatedBy" />{" "}
      </Datagrid>
    </List>
  );
};
