import { SortOrder } from "../../util/SortOrder";

export type AssetNetworkDetailOrderByInput = {
  asset_id?: SortOrder;
  created?: SortOrder;
  dnsName?: SortOrder;
  domain?: SortOrder;
  hostname?: SortOrder;
  id?: SortOrder;
  macAddress?: SortOrder;
  memberOfCluster?: SortOrder;
  previousHostname?: SortOrder;
  primaryMacAddress?: SortOrder;
  updated?: SortOrder;
};
