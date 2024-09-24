import { AssetUpdateManyWithoutEndpointManagementSolutionsInput } from "./AssetUpdateManyWithoutEndpointManagementSolutionsInput";
import { EnvironmentWhereUniqueInput } from "../environment/EnvironmentWhereUniqueInput";

export type EndpointManagementSolutionUpdateInput = {
  asset?: AssetUpdateManyWithoutEndpointManagementSolutionsInput;
  description?: string;
  environment?: EnvironmentWhereUniqueInput | null;
  name?: string;
};
