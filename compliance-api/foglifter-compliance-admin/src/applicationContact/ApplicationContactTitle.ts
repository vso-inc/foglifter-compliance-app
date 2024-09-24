import { ApplicationContact as TApplicationContact } from "../api/applicationContact/ApplicationContact";

export const APPLICATIONCONTACT_TITLE_FIELD = "applicationId";

export const ApplicationContactTitle = (
  record: TApplicationContact
): string => {
  return record.applicationId?.toString() || String(record.id);
};
