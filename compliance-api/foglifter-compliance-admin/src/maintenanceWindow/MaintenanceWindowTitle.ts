import { MaintenanceWindow as TMaintenanceWindow } from "../api/maintenanceWindow/MaintenanceWindow";

export const MAINTENANCEWINDOW_TITLE_FIELD = "maintWindowAvailableDayOfWeek";

export const MaintenanceWindowTitle = (record: TMaintenanceWindow): string => {
  return record.maintWindowAvailableDayOfWeek?.toString() || String(record.id);
};
