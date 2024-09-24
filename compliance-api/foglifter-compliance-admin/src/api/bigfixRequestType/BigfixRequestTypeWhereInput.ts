import { BigfixRequestListRelationFilter } from "../bigfixRequest/BigfixRequestListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type BigfixRequestTypeWhereInput = {
  bigfixRequest?: BigfixRequestListRelationFilter;
  id?: IntFilter;
  requestType?: StringFilter;
};
