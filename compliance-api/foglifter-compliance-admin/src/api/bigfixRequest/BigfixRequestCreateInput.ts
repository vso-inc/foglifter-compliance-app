import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestTypeWhereUniqueInput } from "../bigfixRequestType/BigfixRequestTypeWhereUniqueInput";
import { SubMgmtChangeLogCreateNestedManyWithoutBigfixRequestsInput } from "./SubMgmtChangeLogCreateNestedManyWithoutBigfixRequestsInput";
import { TssChangeLogCreateNestedManyWithoutBigfixRequestsInput } from "./TssChangeLogCreateNestedManyWithoutBigfixRequestsInput";

export type BigfixRequestCreateInput = {
  actionScriptId?: number | null;
  asset?: AssetWhereUniqueInput | null;
  bigfixEnvironment: number;
  bigfixRequestType?: BigfixRequestTypeWhereUniqueInput | null;
  computerId?: number | null;
  computerStatus?: number | null;
  httpResponse?: string | null;
  httpResponseMessage?: string | null;
  request?: string | null;
  requestComputerSettings?: string | null;
  requestStatus: string;
  response?: string | null;
  subMgmtChangeLog?: SubMgmtChangeLogCreateNestedManyWithoutBigfixRequestsInput;
  tssChangeLog?: TssChangeLogCreateNestedManyWithoutBigfixRequestsInput;
  updatedBy: string;
};
