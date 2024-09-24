import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { TssChangeLogListRelationFilter } from "../tssChangeLog/TssChangeLogListRelationFilter";

export type TssChangeLogStatusWhereInput = {
  id?: IntFilter;
  status?: StringFilter;
  tssChangeLog?: TssChangeLogListRelationFilter;
};
