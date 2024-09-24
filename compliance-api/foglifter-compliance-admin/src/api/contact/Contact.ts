import { ApplicationContact } from "../applicationContact/ApplicationContact";
import { OperationsCalendar } from "../operationsCalendar/OperationsCalendar";

export type Contact = {
  applicationContact?: Array<ApplicationContact>;
  created: Date;
  department: string | null;
  email: string | null;
  firstName: string | null;
  id: number;
  lastName: string | null;
  nuid: string;
  operationsCalendar?: Array<OperationsCalendar>;
  reportsTo: number | null;
  title: string | null;
  updated: Date;
  updatedBy: string;
  workPhone: string | null;
};
