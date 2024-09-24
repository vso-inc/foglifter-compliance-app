import { Asset } from "../asset/Asset";

export type MaintenanceWindow = {
  asset?: Asset | null;
  created: Date;
  id: bigint;
  maintWindowAvailableDayOfWeek: string | null;
  maintWindowAvailableMonths: string | null;
  maintWindowAvailableWeeksOfMonth: string | null;
  maintWindowCloseTime: string | null;
  maintWindowLastInside: Date | null;
  maintWindowLevelOfSupport: string | null;
  maintWindowOpenTime: string | null;
  updated: Date;
  updatedBy: string;
};
