import { SortOrder } from "../../util/SortOrder";

export type IpAddressOrderByInput = {
  asset_id?: SortOrder;
  asset_network_details_id?: SortOrder;
  created?: SortOrder;
  dnsName?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  isPrimary?: SortOrder;
  subnetPurpose?: SortOrder;
  typeField?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
