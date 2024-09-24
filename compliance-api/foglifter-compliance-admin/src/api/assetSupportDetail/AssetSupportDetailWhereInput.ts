import { IntNullableFilter } from "../../util/IntNullableFilter";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AssetSupportVendorWhereUniqueInput } from "../assetSupportVendor/AssetSupportVendorWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { BigIntNullableFilter } from "../../util/BigIntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AssetSupportDetailWhereInput = {
  activityBasedCosting?: IntNullableFilter;
  asset?: AssetWhereUniqueInput;
  assetSupportVendor?: AssetSupportVendorWhereUniqueInput;
  created?: DateTimeFilter;
  id?: BigIntFilter;
  resourceUnitId?: BigIntNullableFilter;
  supportContractEndDate?: DateTimeNullableFilter;
  supportContractId?: IntNullableFilter;
  supportContractRenewalCost?: DecimalNullableFilter;
  supportContractRenewalDate?: DateTimeNullableFilter;
  supportContractRenewalNotes?: StringNullableFilter;
  supportContractRenewalTerm?: StringNullableFilter;
  supportContractStartDate?: DateTimeNullableFilter;
  updated?: DateTimeFilter;
};
