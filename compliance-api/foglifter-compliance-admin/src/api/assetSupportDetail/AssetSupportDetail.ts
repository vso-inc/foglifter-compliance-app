import { Asset } from "../asset/Asset";
import { AssetSupportVendor } from "../assetSupportVendor/AssetSupportVendor";
import { Decimal } from "decimal.js";

export type AssetSupportDetail = {
  activityBasedCosting: number | null;
  asset?: Asset | null;
  assetSupportVendor?: AssetSupportVendor | null;
  created: Date;
  id: bigint;
  resourceUnitId: bigint | null;
  supportContractEndDate: Date | null;
  supportContractId: number | null;
  supportContractRenewalCost: Decimal | null;
  supportContractRenewalDate: Date | null;
  supportContractRenewalNotes: string | null;
  supportContractRenewalTerm: string | null;
  supportContractStartDate: Date | null;
  updated: Date;
};
