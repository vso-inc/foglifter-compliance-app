import { AssetLocationDetail as TAssetLocationDetail } from "../api/assetLocationDetail/AssetLocationDetail";

export const ASSETLOCATIONDETAIL_TITLE_FIELD = "locationBuilding";

export const AssetLocationDetailTitle = (
  record: TAssetLocationDetail
): string => {
  return record.locationBuilding?.toString() || String(record.id);
};
