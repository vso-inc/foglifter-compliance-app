import { AssetSupportDetailListRelationFilter } from "../assetSupportDetail/AssetSupportDetailListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AssetSupportVendorWhereInput = {
  assetSupportDetails?: AssetSupportDetailListRelationFilter;
  created?: DateTimeFilter;
  id?: IntFilter;
  supportVendorContactEmail?: StringNullableFilter;
  supportVendorContactFax?: StringNullableFilter;
  supportVendorContactName?: StringNullableFilter;
  supportVendorContactNotes?: StringNullableFilter;
  supportVendorContactPhone?: StringNullableFilter;
  supportVendorName?: StringFilter;
  updated?: DateTimeFilter;
};
