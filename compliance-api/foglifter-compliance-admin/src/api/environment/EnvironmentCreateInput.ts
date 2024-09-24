import { EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput } from "./EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput";

export type EnvironmentCreateInput = {
  endpointManagementSolution?: EndpointManagementSolutionCreateNestedManyWithoutEnvironmentsInput;
  environmentDesc: string;
  environmentName: string;
};
