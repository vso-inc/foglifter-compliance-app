import { BooleanFilter } from "../../util/BooleanFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type BigfixContentResultWhereInput = {
  applicable?: BooleanFilter;
  contentId?: BigIntFilter;
  created?: DateTimeFilter;
  datasourceDeviceId?: BigIntFilter;
  datasourceSiteId?: BigIntFilter;
  firstRelevant?: DateTimeNullableFilter;
  id?: BigIntFilter;
  lastNonRelevant?: DateTimeNullableFilter;
  lastRelevant?: DateTimeNullableFilter;
  relevant?: BooleanFilter;
  resolved?: BooleanFilter;
  reverted?: BooleanFilter;
  typeField?: IntFilter;
  updated?: DateTimeFilter;
};
