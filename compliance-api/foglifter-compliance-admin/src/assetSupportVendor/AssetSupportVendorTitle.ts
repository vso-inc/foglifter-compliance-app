import { AssetSupportVendor as TAssetSupportVendor } from "../api/assetSupportVendor/AssetSupportVendor";

export const ASSETSUPPORTVENDOR_TITLE_FIELD = "supportVendorContactName";

export const AssetSupportVendorTitle = (
  record: TAssetSupportVendor
): string => {
  return record.supportVendorContactName?.toString() || String(record.id);
};
