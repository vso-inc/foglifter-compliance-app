import { AssetNetworkDetail as TAssetNetworkDetail } from "../api/assetNetworkDetail/AssetNetworkDetail";

export const ASSETNETWORKDETAIL_TITLE_FIELD = "dnsName";

export const AssetNetworkDetailTitle = (
  record: TAssetNetworkDetail
): string => {
  return record.dnsName?.toString() || String(record.id);
};
