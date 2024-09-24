import { ApplicationContactListRelationFilter } from "../applicationContact/ApplicationContactListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { OperationsCalendarListRelationFilter } from "../operationsCalendar/OperationsCalendarListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ContactWhereInput = {
  applicationContact?: ApplicationContactListRelationFilter;
  created?: DateTimeFilter;
  department?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  nuid?: StringFilter;
  operationsCalendar?: OperationsCalendarListRelationFilter;
  reportsTo?: IntNullableFilter;
  title?: StringNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
  workPhone?: StringNullableFilter;
};
