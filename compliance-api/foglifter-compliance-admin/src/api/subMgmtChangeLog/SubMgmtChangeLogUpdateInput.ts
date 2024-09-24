import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestWhereUniqueInput } from "../bigfixRequest/BigfixRequestWhereUniqueInput";
import { SubMgmtBigfixRequestPatchChannelIncludeListUpdateManyWithoutSubMgmtChangeLogsInput } from "./SubMgmtBigfixRequestPatchChannelIncludeListUpdateManyWithoutSubMgmtChangeLogsInput";
import { SubMgmtChangeLogStatusWhereUniqueInput } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusWhereUniqueInput";

export type SubMgmtChangeLogUpdateInput = {
  action?: string;
  asset?: AssetWhereUniqueInput | null;
  bigfixRequest?: BigfixRequestWhereUniqueInput | null;
  hostname?: string;
  patchChannelIncludeList?: string;
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListUpdateManyWithoutSubMgmtChangeLogsInput;
  subMgmtChangeLogStatus?: SubMgmtChangeLogStatusWhereUniqueInput;
  updatedBy?: string;
};
