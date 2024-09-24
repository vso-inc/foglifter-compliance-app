import { OperationsCalendarStatus as TOperationsCalendarStatus } from "../api/operationsCalendarStatus/OperationsCalendarStatus";

export const OPERATIONSCALENDARSTATUS_TITLE_FIELD = "status";

export const OperationsCalendarStatusTitle = (
  record: TOperationsCalendarStatus
): string => {
  return record.status?.toString() || String(record.id);
};
