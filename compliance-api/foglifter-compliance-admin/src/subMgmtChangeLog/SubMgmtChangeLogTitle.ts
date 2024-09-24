import { SubMgmtChangeLog as TSubMgmtChangeLog } from "../api/subMgmtChangeLog/SubMgmtChangeLog";

export const SUBMGMTCHANGELOG_TITLE_FIELD = "hostname";

export const SubMgmtChangeLogTitle = (record: TSubMgmtChangeLog): string => {
  return record.hostname?.toString() || String(record.id);
};
