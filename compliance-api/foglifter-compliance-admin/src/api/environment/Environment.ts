import { EndpointManagementSolution } from "../endpointManagementSolution/EndpointManagementSolution";

export type Environment = {
  endpointManagementSolution?: Array<EndpointManagementSolution>;
  environmentDesc: string;
  environmentName: string;
  id: number;
};
