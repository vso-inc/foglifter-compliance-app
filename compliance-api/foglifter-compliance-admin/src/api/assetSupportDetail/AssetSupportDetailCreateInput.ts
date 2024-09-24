import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AssetSupportVendorWhereUniqueInput } from "../assetSupportVendor/AssetSupportVendorWhereUniqueInput";
import { Decimal } from "decimal.js";

export type AssetSupportDetailCreateInput = {
  activityBasedCosting?: number | null;
  asset?: AssetWhereUniqueInput | null;
  assetSupportVendor?: AssetSupportVendorWhereUniqueInput | null;
  resourceUnitId?: bigint | null;
  supportContractEndDate?: Date | null;
  supportContractId?: number | null;
  supportContractRenewalCost?: Decimal | null;
  supportContractRenewalDate?: Date | null;
  supportContractRenewalNotes?: string | null;
  supportContractRenewalTerm?: string | null;
  supportContractStartDate?: Date | null;
};
