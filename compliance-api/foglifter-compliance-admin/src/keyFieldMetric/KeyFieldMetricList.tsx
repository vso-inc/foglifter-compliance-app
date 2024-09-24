import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const KeyFieldMetricList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"KeyFieldMetrics"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Column Name" source="columnName" />
        <TextField label="Column Value" source="columnValue" />
        <DateField source="created" label="Created" />
        <TextField
          label="Error If Percent Change Exceeds"
          source="errorIfPercentChangeExceeds"
        />
        <TextField label="ID" source="id" />
        <TextField
          label="Last Passed Validation"
          source="lastPassedValidation"
        />
        <TextField label="Note" source="note" />
        <TextField label="Statistic Operation" source="statisticOperation" />
        <TextField label="Table Name" source="tableName" />
        <DateField source="updated" label="Updated" />
        <TextField label="Updated By" source="updatedBy" />
        <TextField label="Value Count" source="valueCount" />
        <TextField
          label="Warn If Percent Change Exceeds"
          source="warnIfPercentChangeExceeds"
        />{" "}
      </Datagrid>
    </List>
  );
};
