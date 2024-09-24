import { AssetSupportDetail } from "../assetSupportDetail/AssetSupportDetail";

export type AssetSupportVendor = {
  assetSupportDetails?: Array<AssetSupportDetail>;
  created: Date;
  id: number;
  supportVendorContactEmail: string | null;
  supportVendorContactFax: string | null;
  supportVendorContactName: string | null;
  supportVendorContactNotes: string | null;
  supportVendorContactPhone: string | null;
  supportVendorName: string;
  updated: Date;
};
