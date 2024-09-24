import { EndpointManagementSolutionListRelationFilter } from "../endpointManagementSolution/EndpointManagementSolutionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type EnvironmentWhereInput = {
  endpointManagementSolution?: EndpointManagementSolutionListRelationFilter;
  environmentDesc?: StringFilter;
  environmentName?: StringFilter;
  id?: IntFilter;
};
