import { AssetSupportDetail as TAssetSupportDetail } from "../api/assetSupportDetail/AssetSupportDetail";

export const ASSETSUPPORTDETAIL_TITLE_FIELD = "supportContractRenewalNotes";

export const AssetSupportDetailTitle = (
  record: TAssetSupportDetail
): string => {
  return record.supportContractRenewalNotes?.toString() || String(record.id);
};
