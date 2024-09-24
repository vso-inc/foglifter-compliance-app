import { Asset } from "../asset/Asset";
import { BigfixRequest } from "../bigfixRequest/BigfixRequest";
import { SubMgmtBigfixRequestPatchChannelIncludeList } from "../subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeList";
import { SubMgmtChangeLogStatus } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatus";

export type SubMgmtChangeLog = {
  action: string;
  asset?: Asset | null;
  bigfixRequest?: BigfixRequest | null;
  created: Date;
  hostname: string;
  id: number;
  patchChannelIncludeList: string;
  subMgmtBigfixRequestPatchChannelIncludeList?: Array<SubMgmtBigfixRequestPatchChannelIncludeList>;
  subMgmtChangeLogStatus?: SubMgmtChangeLogStatus;
  updated: Date;
  updatedBy: string;
};
