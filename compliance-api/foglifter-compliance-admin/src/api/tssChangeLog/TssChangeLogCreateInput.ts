import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestWhereUniqueInput } from "../bigfixRequest/BigfixRequestWhereUniqueInput";
import { TssChangeLogStatusWhereUniqueInput } from "../tssChangeLogStatus/TssChangeLogStatusWhereUniqueInput";

export type TssChangeLogCreateInput = {
  action: string;
  applyOn?: Date | null;
  applyOnNextScheduledMaintWindow: boolean;
  asset?: AssetWhereUniqueInput | null;
  bigfixRequest?: BigfixRequestWhereUniqueInput | null;
  remediationWindowHours: number;
  tssChangeLogStatus: TssChangeLogStatusWhereUniqueInput;
  tssIncludeList?: string | null;
  updatedBy: string;
};
