import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RebootWindowWhereInput = {
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  id?: BigIntFilter;
  rebootWindowAvailableDayOfWeek?: StringNullableFilter;
  rebootWindowAvailableMonths?: StringNullableFilter;
  rebootWindowAvailableWeeksOfMonth?: StringNullableFilter;
  rebootWindowCloseTime?: StringNullableFilter;
  rebootWindowOpenTime?: StringNullableFilter;
  updated?: DateTimeFilter;
};
