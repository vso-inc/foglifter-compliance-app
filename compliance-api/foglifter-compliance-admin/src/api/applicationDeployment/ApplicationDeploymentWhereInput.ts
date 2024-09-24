import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApplicationDeploymentWhereInput = {
  application?: ApplicationWhereUniqueInput;
  asset?: AssetWhereUniqueInput;
  created?: DateTimeFilter;
  deploymentId?: StringNullableFilter;
  deploymentName?: StringNullableFilter;
  deploymentNote?: StringNullableFilter;
  deploymentStatus?: StringNullableFilter;
  deploymentType?: StringNullableFilter;
  id?: IntFilter;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
