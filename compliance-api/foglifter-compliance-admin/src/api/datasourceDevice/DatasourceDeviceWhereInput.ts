import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DatasourceDeviceWhereInput = {
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  datasourceId?: IntNullableFilter;
  id?: BigIntFilter;
  isDeleted?: BooleanNullableFilter;
  isLocked?: BooleanNullableFilter;
  lastReportSent?: DateTimeNullableFilter;
  lastReportTime?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  reportNumber?: BigIntFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
