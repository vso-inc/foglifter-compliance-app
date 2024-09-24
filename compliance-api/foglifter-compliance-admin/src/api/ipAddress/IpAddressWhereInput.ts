import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AssetNetworkDetailWhereUniqueInput } from "../assetNetworkDetail/AssetNetworkDetailWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type IpAddressWhereInput = {
  asset?: AssetWhereUniqueInput;
  assetNetworkDetails?: AssetNetworkDetailWhereUniqueInput;
  created?: DateTimeFilter;
  dnsName?: StringNullableFilter;
  id?: IntFilter;
  ip?: StringFilter;
  isPrimary?: BooleanFilter;
  subnetPurpose?: StringNullableFilter;
  typeField?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringNullableFilter;
};
