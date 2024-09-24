import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "assigned";

export const AssetTitle = (record: TAsset): string => {
  return record.assigned?.toString() || String(record.id);
};
