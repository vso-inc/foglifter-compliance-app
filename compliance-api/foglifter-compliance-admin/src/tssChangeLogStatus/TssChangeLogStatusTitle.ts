import { TssChangeLogStatus as TTssChangeLogStatus } from "../api/tssChangeLogStatus/TssChangeLogStatus";

export const TSSCHANGELOGSTATUS_TITLE_FIELD = "status";

export const TssChangeLogStatusTitle = (
  record: TTssChangeLogStatus
): string => {
  return record.status?.toString() || String(record.id);
};
