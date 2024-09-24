import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";

export type ConfigModelWhereInput = {
  configName?: StringFilter;
  configValue?: StringNullableFilter;
  created?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
