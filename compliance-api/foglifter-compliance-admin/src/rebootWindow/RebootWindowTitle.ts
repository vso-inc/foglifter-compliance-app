import { RebootWindow as TRebootWindow } from "../api/rebootWindow/RebootWindow";

export const REBOOTWINDOW_TITLE_FIELD = "rebootWindowAvailableDayOfWeek";

export const RebootWindowTitle = (record: TRebootWindow): string => {
  return record.rebootWindowAvailableDayOfWeek?.toString() || String(record.id);
};
