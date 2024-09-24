import { SortOrder } from "../../util/SortOrder";

export type AssetLocationDetailOrderByInput = {
  asset_id?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
  inDataCenter?: SortOrder;
  locationBuilding?: SortOrder;
  locationCode?: SortOrder;
  locationFloor?: SortOrder;
  locationFull?: SortOrder;
  locationGrid?: SortOrder;
  locationPhysical?: SortOrder;
  region?: SortOrder;
  serviceArea?: SortOrder;
  updated?: SortOrder;
};
