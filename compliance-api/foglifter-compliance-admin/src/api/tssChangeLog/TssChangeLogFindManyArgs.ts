import { TssChangeLogWhereInput } from "./TssChangeLogWhereInput";
import { TssChangeLogOrderByInput } from "./TssChangeLogOrderByInput";

export type TssChangeLogFindManyArgs = {
  where?: TssChangeLogWhereInput;
  orderBy?: Array<TssChangeLogOrderByInput>;
  skip?: number;
  take?: number;
};
