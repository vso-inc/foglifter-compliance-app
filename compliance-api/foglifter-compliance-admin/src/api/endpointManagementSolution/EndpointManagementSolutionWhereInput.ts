import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type EndpointManagementSolutionWhereInput = {
  asset?: AssetListRelationFilter;
  description?: StringFilter;
  environment?: EnvironmentWhereUniqueInput;
  id?: IntFilter;
  name?: StringFilter;
};
