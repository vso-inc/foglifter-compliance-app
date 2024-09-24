import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestTypeWhereUniqueInput } from "../bigfixRequestType/BigfixRequestTypeWhereUniqueInput";
import { SubMgmtChangeLogUpdateManyWithoutBigfixRequestsInput } from "./SubMgmtChangeLogUpdateManyWithoutBigfixRequestsInput";
import { TssChangeLogUpdateManyWithoutBigfixRequestsInput } from "./TssChangeLogUpdateManyWithoutBigfixRequestsInput";

export type BigfixRequestUpdateInput = {
  actionScriptId?: number | null;
  asset?: AssetWhereUniqueInput | null;
  bigfixEnvironment?: number;
  bigfixRequestType?: BigfixRequestTypeWhereUniqueInput | null;
  computerId?: number | null;
  computerStatus?: number | null;
  httpResponse?: string | null;
  httpResponseMessage?: string | null;
  request?: string | null;
  requestComputerSettings?: string | null;
  requestStatus?: string;
  response?: string | null;
  subMgmtChangeLog?: SubMgmtChangeLogUpdateManyWithoutBigfixRequestsInput;
  tssChangeLog?: TssChangeLogUpdateManyWithoutBigfixRequestsInput;
  updatedBy?: string;
};
