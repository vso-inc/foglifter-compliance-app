import { StringFilter } from "../../util/StringFilter";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { BigfixRequestWhereUniqueInput } from "../bigfixRequest/BigfixRequestWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter } from "../subMgmtBigfixRequestPatchChannelIncludeList/SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter";
import { SubMgmtChangeLogStatusWhereUniqueInput } from "../subMgmtChangeLogStatus/SubMgmtChangeLogStatusWhereUniqueInput";

export type SubMgmtChangeLogWhereInput = {
  action?: StringFilter;
  asset?: AssetWhereUniqueInput;
  bigfixRequest?: BigfixRequestWhereUniqueInput;
  created?: DateTimeFilter;
  hostname?: StringFilter;
  id?: IntFilter;
  patchChannelIncludeList?: StringFilter;
  subMgmtBigfixRequestPatchChannelIncludeList?: SubMgmtBigfixRequestPatchChannelIncludeListListRelationFilter;
  subMgmtChangeLogStatus?: SubMgmtChangeLogStatusWhereUniqueInput;
  updated?: DateTimeFilter;
  updatedBy?: StringFilter;
};
