import { Asset } from "../asset/Asset";
import { IpAddress } from "../ipAddress/IpAddress";

export type AssetNetworkDetail = {
  asset?: Asset | null;
  created: Date;
  dnsName: string | null;
  domain: string | null;
  hostname: string;
  id: bigint;
  ipAddress?: Array<IpAddress>;
  macAddress: string | null;
  memberOfCluster: string | null;
  previousHostname: string | null;
  primaryMacAddress: string | null;
  updated: Date;
};
