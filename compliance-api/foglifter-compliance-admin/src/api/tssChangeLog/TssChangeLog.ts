import { Asset } from "../asset/Asset";
import { BigfixRequest } from "../bigfixRequest/BigfixRequest";
import { TssChangeLogStatus } from "../tssChangeLogStatus/TssChangeLogStatus";

export type TssChangeLog = {
  action: string;
  applyOn: Date | null;
  applyOnNextScheduledMaintWindow: boolean;
  asset?: Asset | null;
  bigfixRequest?: BigfixRequest | null;
  created: Date;
  id: number;
  remediationWindowHours: number;
  tssChangeLogStatus?: TssChangeLogStatus;
  tssIncludeList: string | null;
  updated: Date;
  updatedBy: string;
};
