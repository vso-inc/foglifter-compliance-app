import { OperationsCalendar as TOperationsCalendar } from "../api/operationsCalendar/OperationsCalendar";

export const OPERATIONSCALENDAR_TITLE_FIELD = "changeCoordinator";

export const OperationsCalendarTitle = (
  record: TOperationsCalendar
): string => {
  return record.changeCoordinator?.toString() || String(record.id);
};
