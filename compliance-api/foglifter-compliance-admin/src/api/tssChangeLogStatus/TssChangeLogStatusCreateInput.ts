import { TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput } from "./TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput";

export type TssChangeLogStatusCreateInput = {
  status: string;
  tssChangeLog?: TssChangeLogCreateNestedManyWithoutTssChangeLogStatusesInput;
};
