import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApplicationOrganizationWhereInput = {
  application?: ApplicationWhereUniqueInput;
  created?: DateTimeFilter;
  id?: IntFilter;
  level?: IntFilter;
  name?: StringNullableFilter;
  typeField?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
