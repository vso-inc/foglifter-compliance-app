import { IntFilter } from "../../util/IntFilter";
import { OperationsCalendarListRelationFilter } from "../operationsCalendar/OperationsCalendarListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OperationsCalendarStatusWhereInput = {
  id?: IntFilter;
  operationsCalendar?: OperationsCalendarListRelationFilter;
  status?: StringNullableFilter;
};
