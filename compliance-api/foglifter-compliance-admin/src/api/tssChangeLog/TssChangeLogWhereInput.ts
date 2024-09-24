import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestWhereUniqueInput } from "../bigfixRequest/BigfixRequestWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { TssChangeLogStatusWhereUniqueInput } from "../tssChangeLogStatus/TssChangeLogStatusWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TssChangeLogWhereInput = {
  action?: StringFilter;
  applyOn?: DateTimeNullableFilter;
  applyOnNextScheduledMaintWindow?: BooleanFilter;
  asset?: AssetWhereUniqueInput;
  bigfixRequest?: BigfixRequestWhereUniqueInput;
  created?: DateTimeFilter;
  id?: IntFilter;
  remediationWindowHours?: IntFilter;
  tssChangeLogStatus?: TssChangeLogStatusWhereUniqueInput;
  tssIncludeList?: StringNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
