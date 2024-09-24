import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExceptionWhereInput = {
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  exceptionEnd?: DateTimeNullableFilter;
  exceptionReason?: StringNullableFilter;
  exceptionStart?: DateTimeNullableFilter;
  exceptionType?: StringNullableFilter;
  id?: IntFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
