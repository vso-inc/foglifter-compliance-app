import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { IpAddressListRelationFilter } from "../ipAddress/IpAddressListRelationFilter";

export type AssetNetworkDetailWhereInput = {
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  dnsName?: StringNullableFilter;
  domain?: StringNullableFilter;
  hostname?: StringFilter;
  id?: BigIntFilter;
  ipAddress?: IpAddressListRelationFilter;
  macAddress?: StringNullableFilter;
  memberOfCluster?: StringNullableFilter;
  previousHostname?: StringNullableFilter;
  primaryMacAddress?: StringNullableFilter;
  updated?: DateTimeFilter;
};
