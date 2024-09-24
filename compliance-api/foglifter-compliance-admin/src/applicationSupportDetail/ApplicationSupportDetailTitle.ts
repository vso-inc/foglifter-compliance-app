import { ApplicationSupportDetail as TApplicationSupportDetail } from "../api/applicationSupportDetail/ApplicationSupportDetail";

export const APPLICATIONSUPPORTDETAIL_TITLE_FIELD =
  "businessRequiredRecoveryPointObjective";

export const ApplicationSupportDetailTitle = (
  record: TApplicationSupportDetail
): string => {
  return (
    record.businessRequiredRecoveryPointObjective?.toString() ||
    String(record.id)
  );
};
