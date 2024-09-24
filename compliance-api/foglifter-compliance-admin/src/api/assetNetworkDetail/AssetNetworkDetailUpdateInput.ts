import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { IpAddressUpdateManyWithoutAssetNetworkDetailsInput } from "./IpAddressUpdateManyWithoutAssetNetworkDetailsInput";

export type AssetNetworkDetailUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  dnsName?: string | null;
  domain?: string | null;
  hostname?: string;
  ipAddress?: IpAddressUpdateManyWithoutAssetNetworkDetailsInput;
  macAddress?: string | null;
  memberOfCluster?: string | null;
  previousHostname?: string | null;
  primaryMacAddress?: string | null;
};
