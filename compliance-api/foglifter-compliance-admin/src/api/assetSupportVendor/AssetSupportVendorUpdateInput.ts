import { AssetSupportDetailUpdateManyWithoutAssetSupportVendorsInput } from "./AssetSupportDetailUpdateManyWithoutAssetSupportVendorsInput";

export type AssetSupportVendorUpdateInput = {
  assetSupportDetails?: AssetSupportDetailUpdateManyWithoutAssetSupportVendorsInput;
  supportVendorContactEmail?: string | null;
  supportVendorContactFax?: string | null;
  supportVendorContactName?: string | null;
  supportVendorContactNotes?: string | null;
  supportVendorContactPhone?: string | null;
  supportVendorName?: string;
};
