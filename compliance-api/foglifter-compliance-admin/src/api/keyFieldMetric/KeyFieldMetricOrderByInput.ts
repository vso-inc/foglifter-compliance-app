import { SortOrder } from "../../util/SortOrder";

export type KeyFieldMetricOrderByInput = {
  columnName?: SortOrder;
  columnValue?: SortOrder;
  created?: SortOrder;
  errorIfPercentChangeExceeds?: SortOrder;
  id?: SortOrder;
  lastPassedValidation?: SortOrder;
  note?: SortOrder;
  statisticOperation?: SortOrder;
  tableName?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
  valueCount?: SortOrder;
  warnIfPercentChangeExceeds?: SortOrder;
};
