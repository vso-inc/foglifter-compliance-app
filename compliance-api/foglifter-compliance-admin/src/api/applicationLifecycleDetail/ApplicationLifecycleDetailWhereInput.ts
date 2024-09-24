import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ApplicationLifecycleDetailWhereInput = {
  actualDecommission?: DateTimeNullableFilter;
  actualRetirement?: DateTimeNullableFilter;
  application?: ApplicationWhereUniqueInput;
  decommissionProcess?: StringNullableFilter;
  decommissionState?: StringNullableFilter;
  id?: IntFilter;
  isDrEnabled?: BooleanNullableFilter;
  plannedDecommission?: DateTimeNullableFilter;
  plannedRetirement?: DateTimeNullableFilter;
};
