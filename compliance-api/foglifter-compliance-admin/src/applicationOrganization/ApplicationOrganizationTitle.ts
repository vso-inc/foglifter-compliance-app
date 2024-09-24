import { ApplicationOrganization as TApplicationOrganization } from "../api/applicationOrganization/ApplicationOrganization";

export const APPLICATIONORGANIZATION_TITLE_FIELD = "name";

export const ApplicationOrganizationTitle = (
  record: TApplicationOrganization
): string => {
  return record.name?.toString() || String(record.id);
};
