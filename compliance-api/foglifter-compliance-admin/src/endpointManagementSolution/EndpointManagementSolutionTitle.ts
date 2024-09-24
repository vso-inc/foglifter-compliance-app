import { EndpointManagementSolution as TEndpointManagementSolution } from "../api/endpointManagementSolution/EndpointManagementSolution";

export const ENDPOINTMANAGEMENTSOLUTION_TITLE_FIELD = "name";

export const EndpointManagementSolutionTitle = (
  record: TEndpointManagementSolution
): string => {
  return record.name?.toString() || String(record.id);
};
