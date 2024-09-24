import { MaintenanceWindowWhereInput } from "./MaintenanceWindowWhereInput";
import { MaintenanceWindowOrderByInput } from "./MaintenanceWindowOrderByInput";

export type MaintenanceWindowFindManyArgs = {
  where?: MaintenanceWindowWhereInput;
  orderBy?: Array<MaintenanceWindowOrderByInput>;
  skip?: number;
  take?: number;
};
