import { AssetCreateNestedManyWithoutEndpointManagementSolutionsInput } from "./AssetCreateNestedManyWithoutEndpointManagementSolutionsInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type EndpointManagementSolutionCreateInput = {
  asset?: AssetCreateNestedManyWithoutEndpointManagementSolutionsInput;
  description: string;
  environment?: EnvironmentWhereUniqueInput | null;
  name: string;
};
