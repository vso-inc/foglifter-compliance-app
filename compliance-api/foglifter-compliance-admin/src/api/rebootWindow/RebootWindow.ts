import { Asset } from "../asset/Asset";

export type RebootWindow = {
  asset?: Asset | null;
  created: Date;
  id: bigint;
  rebootWindowAvailableDayOfWeek: string | null;
  rebootWindowAvailableMonths: string | null;
  rebootWindowAvailableWeeksOfMonth: string | null;
  rebootWindowCloseTime: string | null;
  rebootWindowOpenTime: string | null;
  updated: Date;
};
