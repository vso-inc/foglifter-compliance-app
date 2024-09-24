import { TssChangeLogStatusWhereInput } from "./TssChangeLogStatusWhereInput";
import { TssChangeLogStatusOrderByInput } from "./TssChangeLogStatusOrderByInput";

export type TssChangeLogStatusFindManyArgs = {
  where?: TssChangeLogStatusWhereInput;
  orderBy?: Array<TssChangeLogStatusOrderByInput>;
  skip?: number;
  take?: number;
};
