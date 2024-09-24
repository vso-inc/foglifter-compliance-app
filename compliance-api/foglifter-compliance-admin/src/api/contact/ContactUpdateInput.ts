import { ApplicationContactUpdateManyWithoutContactsInput } from "./ApplicationContactUpdateManyWithoutContactsInput";
import { OperationsCalendarUpdateManyWithoutContactsInput } from "./OperationsCalendarUpdateManyWithoutContactsInput";

export type ContactUpdateInput = {
  applicationContact?: ApplicationContactUpdateManyWithoutContactsInput;
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nuid?: string;
  operationsCalendar?: OperationsCalendarUpdateManyWithoutContactsInput;
  reportsTo?: number | null;
  title?: string | null;
  updatedBy?: string;
  workPhone?: string | null;
};
