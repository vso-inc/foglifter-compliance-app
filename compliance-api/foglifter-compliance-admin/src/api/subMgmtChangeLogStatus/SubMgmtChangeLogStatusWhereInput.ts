import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubMgmtChangeLogListRelationFilter } from "../subMgmtChangeLog/SubMgmtChangeLogListRelationFilter";

export type SubMgmtChangeLogStatusWhereInput = {
  id?: IntFilter;
  status?: StringFilter;
  subMgmtChangeLog?: SubMgmtChangeLogListRelationFilter;
};
