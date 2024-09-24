import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MaintenanceWindowWhereInput = {
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  id?: BigIntFilter;
  maintWindowAvailableDayOfWeek?: StringNullableFilter;
  maintWindowAvailableMonths?: StringNullableFilter;
  maintWindowAvailableWeeksOfMonth?: StringNullableFilter;
  maintWindowCloseTime?: StringNullableFilter;
  maintWindowLastInside?: DateTimeNullableFilter;
  maintWindowLevelOfSupport?: StringNullableFilter;
  maintWindowOpenTime?: StringNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
