import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type MaintenanceWindowUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  maintWindowAvailableDayOfWeek?: string | null;
  maintWindowAvailableMonths?: string | null;
  maintWindowAvailableWeeksOfMonth?: string | null;
  maintWindowCloseTime?: string | null;
  maintWindowLastInside?: Date | null;
  maintWindowLevelOfSupport?: string | null;
  maintWindowOpenTime?: string | null;
  updatedBy?: string;
};
