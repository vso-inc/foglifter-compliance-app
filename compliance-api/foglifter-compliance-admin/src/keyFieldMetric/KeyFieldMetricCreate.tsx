import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const KeyFieldMetricCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Column Name" source="columnName" />
        <TextInput label="Column Value" source="columnValue" />
        <NumberInput
          label="Error If Percent Change Exceeds"
          source="errorIfPercentChangeExceeds"
        />
        <DateTimeInput
          label="Last Passed Validation"
          source="lastPassedValidation"
        />
        <TextInput label="Note" source="note" />
        <TextInput label="Statistic Operation" source="statisticOperation" />
        <TextInput label="Table Name" source="tableName" />
        <TextInput label="Updated By" source="updatedBy" />
        <NumberInput step={1} label="Value Count" source="valueCount" />
        <NumberInput
          label="Warn If Percent Change Exceeds"
          source="warnIfPercentChangeExceeds"
        />
      </SimpleForm>
    </Create>
  );
};
