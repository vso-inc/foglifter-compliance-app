import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AssetNetworkDetailWhereUniqueInput } from "../assetNetworkDetail/AssetNetworkDetailWhereUniqueInput";

export type IpAddressCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  assetNetworkDetails?: AssetNetworkDetailWhereUniqueInput | null;
  dnsName?: string | null;
  ip: string;
  isPrimary: boolean;
  subnetPurpose?: string | null;
  typeField: string;
  updatedBy?: string | null;
};
