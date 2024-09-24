import { SortOrder } from "../../util/SortOrder";

export type AttestationHostOrderByInput = {
  asset_id?: SortOrder;
  attestation_id?: SortOrder;
  created?: SortOrder;
  id?: SortOrder;
  isSupportedByThirdParty?: SortOrder;
  updated?: SortOrder;
  updatedBy?: SortOrder;
};
