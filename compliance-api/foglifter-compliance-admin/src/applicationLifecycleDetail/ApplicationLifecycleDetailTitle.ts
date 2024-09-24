import { ApplicationLifecycleDetail as TApplicationLifecycleDetail } from "../api/applicationLifecycleDetail/ApplicationLifecycleDetail";

export const APPLICATIONLIFECYCLEDETAIL_TITLE_FIELD = "decommissionProcess";

export const ApplicationLifecycleDetailTitle = (
  record: TApplicationLifecycleDetail
): string => {
  return record.decommissionProcess?.toString() || String(record.id);
};
