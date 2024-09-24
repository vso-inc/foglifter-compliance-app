import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type RebootWindowCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  rebootWindowAvailableDayOfWeek?: string | null;
  rebootWindowAvailableMonths?: string | null;
  rebootWindowAvailableWeeksOfMonth?: string | null;
  rebootWindowCloseTime?: string | null;
  rebootWindowOpenTime?: string | null;
};
