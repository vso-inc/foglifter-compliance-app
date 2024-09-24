import { AssetConfigurationDetail as TAssetConfigurationDetail } from "../api/assetConfigurationDetail/AssetConfigurationDetail";

export const ASSETCONFIGURATIONDETAIL_TITLE_FIELD = "assetTag";

export const AssetConfigurationDetailTitle = (
  record: TAssetConfigurationDetail
): string => {
  return record.assetTag?.toString() || String(record.id);
};
