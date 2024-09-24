import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ApplicationContactWhereInput = {
  application?: ApplicationWhereUniqueInput;
  applicationId?: StringFilter;
  contact?: ContactWhereUniqueInput;
  created?: DateTimeFilter;
  id?: IntFilter;
  roleEnds?: DateTimeNullableFilter;
  roleStarts?: DateTimeNullableFilter;
  roleType?: StringFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
