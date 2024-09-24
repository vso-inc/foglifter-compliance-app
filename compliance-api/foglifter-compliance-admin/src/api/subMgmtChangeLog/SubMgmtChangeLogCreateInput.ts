import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestWhereUniqueInput } from "../bigfixRequest/BigfixRequestWhereUniqueInput";
import { SubMgmtBigfixRequestPatchChannelIncludeListCreateNestedManyWithoutSubMgmtChangeLogsInput } from "./SubMgmtBigfixRequestPatchChannelIncludeListCreateNestedManyWithoutSubMgmtChangeLogsInput";
import { SubMgmtChangeLogStatusWhereUniqueInput } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusWhereUniqueInput";

export type SubMgmtChangeLogCreateInput = {
  action: string;
  asset?: AssetWhereUniqueInput | null;
  bigfixRequest?: BigfixRequestWhereUniqueInput | null;
  hostname: string;
  patchChannelIncludeList: string;
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListCreateNestedManyWithoutSubMgmtChangeLogsInput;
  subMgmtChangeLogStatus: SubMgmtChangeLogStatusWhereUniqueInput;
  updatedBy: string;
};
