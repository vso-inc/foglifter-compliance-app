import { ApplicationContactCreateNestedManyWithoutContactsInput } from "./ApplicationContactCreateNestedManyWithoutContactsInput";
import { OperationsCalendarCreateNestedManyWithoutContactsInput } from "./OperationsCalendarCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  applicationContact?: ApplicationContactCreateNestedManyWithoutContactsInput;
  department?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  nuid: string;
  operationsCalendar?: OperationsCalendarCreateNestedManyWithoutContactsInput;
  reportsTo?: number | null;
  title?: string | null;
  updatedBy: string;
  workPhone?: string | null;
};
