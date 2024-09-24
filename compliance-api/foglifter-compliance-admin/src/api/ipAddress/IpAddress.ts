import { Asset } from "../asset/Asset";
import { AssetNetworkDetail } from "../assetNetworkDetail/AssetNetworkDetail";

export type IpAddress = {
  asset?: Asset | null;
  assetNetworkDetails?: AssetNetworkDetail | null;
  created: Date;
  dnsName: string | null;
  id: number;
  ip: string;
  isPrimary: boolean;
  subnetPurpose: string | null;
  typeField: string;
  updated: Date;
  updatedBy: string | null;
};
