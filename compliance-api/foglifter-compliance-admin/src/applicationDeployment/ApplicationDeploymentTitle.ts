import { ApplicationDeployment as TApplicationDeployment } from "../api/applicationDeployment/ApplicationDeployment";

export const APPLICATIONDEPLOYMENT_TITLE_FIELD = "deploymentName";

export const ApplicationDeploymentTitle = (
  record: TApplicationDeployment
): string => {
  return record.deploymentName?.toString() || String(record.id);
};
