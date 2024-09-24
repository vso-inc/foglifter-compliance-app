import { SubMgmtChangeLogStatus as TSubMgmtChangeLogStatus } from "../api/subMgmtChangeLogStatus/SubMgmtChangeLogStatus";

export const SUBMGMTCHANGELOGSTATUS_TITLE_FIELD = "status";

export const SubMgmtChangeLogStatusTitle = (
  record: TSubMgmtChangeLogStatus
): string => {
  return record.status?.toString() || String(record.id);
};
