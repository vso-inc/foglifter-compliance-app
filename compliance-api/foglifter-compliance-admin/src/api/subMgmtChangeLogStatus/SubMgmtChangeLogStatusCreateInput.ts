import { SubMgmtChangeLogCreateNestedManyWithoutSubMgmtChangeLogStatusesInput } from "./SubMgmtChangeLogCreateNestedManyWithoutSubMgmtChangeLogStatusesInput";

export type SubMgmtChangeLogStatusCreateInput = {
  status: string;
  subMgmtChangeLog?: SubMgmtChangeLogCreateNestedManyWithoutSubMgmtChangeLogStatusesInput;
};
