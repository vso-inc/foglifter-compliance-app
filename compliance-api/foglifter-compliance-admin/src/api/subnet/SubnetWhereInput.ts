import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubnetWhereInput = {
  created?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  purpose?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
