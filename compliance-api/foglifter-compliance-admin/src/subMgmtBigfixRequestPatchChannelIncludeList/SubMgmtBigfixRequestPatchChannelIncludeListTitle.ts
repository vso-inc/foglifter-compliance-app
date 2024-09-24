import { SubMgmtBigfixRequestPatchChannelIncludeList as TSubMgmtBigfixRequestPatchChannelIncludeList } from "../api/subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeList";

export const SUBMGMTBIGFIXREQUESTPATCHCHANNELINCLUDELIST_TITLE_FIELD = "id";

export const SubMgmtBigfixRequestPatchChannelIncludeListTitle = (
  record: TSubMgmtBigfixRequestPatchChannelIncludeList
): string => {
  return record.id?.toString() || String(record.id);
};
