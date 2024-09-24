import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KeyFieldMetricWhereInput = {
  columnName?: StringFilter;
  columnValue?: StringFilter;
  created?: DateTimeFilter;
  errorIfPercentChangeExceeds?: FloatFilter;
  id?: IntFilter;
  lastPassedValidation?: DateTimeNullableFilter;
  note?: StringNullableFilter;
  statisticOperation?: StringFilter;
  tableName?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
  valueCount?: IntFilter;
  warnIfPercentChangeExceeds?: FloatFilter;
};
