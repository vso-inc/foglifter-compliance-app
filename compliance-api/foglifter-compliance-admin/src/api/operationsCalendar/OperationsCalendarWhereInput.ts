import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OperationsCalendarStatusWhereUniqueInput } from "../operationsCalendarStatus/OperationsCalendarStatusWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OperationsCalendarWhereInput = {
  asset?: AssetWhereUniqueInput;
  changeCoordinator?: StringNullableFilter;
  changeManager?: StringNullableFilter;
  changeRequest?: StringNullableFilter;
  contact?: ContactWhereUniqueInput;
  created?: DateTimeFilter;
  developmentManager?: StringNullableFilter;
  id?: IntFilter;
  lastPatched?: DateTimeNullableFilter;
  locked?: DateTimeNullableFilter;
  lockedBy?: StringNullableFilter;
  note?: StringNullableFilter;
  operationsCalendarStatus?: OperationsCalendarStatusWhereUniqueInput;
  projectManager?: StringNullableFilter;
  reasonCode?: IntNullableFilter;
  scheduled?: DateTimeNullableFilter;
  scheduledBy?: StringNullableFilter;
  serviceId?: IntNullableFilter;
  technicalLead?: StringNullableFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringNullableFilter;
};
