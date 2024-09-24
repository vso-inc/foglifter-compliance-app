import { OperationsCalendar } from "../operationsCalendar/OperationsCalendar";

export type OperationsCalendarStatus = {
  id: number;
  operationsCalendar?: Array<OperationsCalendar>;
  status: string | null;
};
