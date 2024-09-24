import { AssetSupportDetailCreateNestedManyWithoutAssetSupportVendorsInput } from "./AssetSupportDetailCreateNestedManyWithoutAssetSupportVendorsInput";

export type AssetSupportVendorCreateInput = {
  assetSupportDetails?: AssetSupportDetailCreateNestedManyWithoutAssetSupportVendorsInput;
  supportVendorContactEmail?: string | null;
  supportVendorContactFax?: string | null;
  supportVendorContactName?: string | null;
  supportVendorContactNotes?: string | null;
  supportVendorContactPhone?: string | null;
  supportVendorName: string;
};
