import { SortOrder } from "../../util/SortOrder";

export type PatchChannelOrderByInput = {
  created?: SortOrder;
  id?: SortOrder;
  isUserSelectable?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  operatingSystem?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
