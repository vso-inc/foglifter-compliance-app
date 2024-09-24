import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssetLocationDetailWhereInput = {
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  id?: BigIntFilter;
  inDataCenter?: BooleanNullableFilter;
  locationBuilding?: StringNullableFilter;
  locationCode?: StringNullableFilter;
  locationFloor?: StringNullableFilter;
  locationFull?: StringNullableFilter;
  locationGrid?: StringNullableFilter;
  locationPhysical?: StringNullableFilter;
  region?: StringNullableFilter;
  serviceArea?: StringNullableFilter;
  updated?: DateTimeFilter;
};
