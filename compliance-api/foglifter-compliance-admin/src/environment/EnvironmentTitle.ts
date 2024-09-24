import { Environment as TEnvironment } from "../api/environment/Environment";

export const ENVIRONMENT_TITLE_FIELD = "environmentName";

export const EnvironmentTitle = (record: TEnvironment): string => {
  return record.environmentName?.toString() || String(record.id);
};
