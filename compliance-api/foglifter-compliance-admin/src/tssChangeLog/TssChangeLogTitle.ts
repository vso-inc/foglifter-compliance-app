import { TssChangeLog as TTssChangeLog } from "../api/tssChangeLog/TssChangeLog";

export const TSSCHANGELOG_TITLE_FIELD = "action";

export const TssChangeLogTitle = (record: TTssChangeLog): string => {
  return record.action?.toString() || String(record.id);
};
