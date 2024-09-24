import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { IpAddressCreateNestedManyWithoutAssetNetworkDetailsInput } from "./IpAddressCreateNestedManyWithoutAssetNetworkDetailsInput";

export type AssetNetworkDetailCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  dnsName?: string | null;
  domain?: string | null;
  hostname: string;
  ipAddress?: IpAddressCreateNestedManyWithoutAssetNetworkDetailsInput;
  macAddress?: string | null;
  memberOfCluster?: string | null;
  previousHostname?: string | null;
  primaryMacAddress?: string | null;
};
