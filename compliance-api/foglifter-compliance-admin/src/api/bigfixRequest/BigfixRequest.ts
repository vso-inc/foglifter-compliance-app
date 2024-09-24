import { Asset } from "../asset/Asset";
import { BigfixRequestType } from "../bigfixRequestType/BigfixRequestType";
import { SubMgmtChangeLog } from "../subMgmtChangeLog/SubMgmtChangeLog";
import { TssChangeLog } from "../tssChangeLog/TssChangeLog";

export type BigfixRequest = {
  actionScriptId: number | null;
  asset?: Asset | null;
  bigfixEnvironment: number;
  bigfixRequestType?: BigfixRequestType | null;
  computerId: number | null;
  computerStatus: number | null;
  created: Date;
  httpResponse: string | null;
  httpResponseMessage: string | null;
  id: bigint;
  request: string | null;
  requestComputerSettings: string | null;
  requestStatus: string;
  response: string | null;
  subMgmtChangeLog?: Array<SubMgmtChangeLog>;
  tssChangeLog?: Array<TssChangeLog>;
  updated: Date;
  updatedBy: string;
};
