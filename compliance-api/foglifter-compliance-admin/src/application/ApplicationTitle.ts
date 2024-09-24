import { Application as TApplication } from "../api/application/Application";

export const APPLICATION_TITLE_FIELD = "businessName";

export const ApplicationTitle = (record: TApplication): string => {
  return record.businessName?.toString() || String(record.id);
};
