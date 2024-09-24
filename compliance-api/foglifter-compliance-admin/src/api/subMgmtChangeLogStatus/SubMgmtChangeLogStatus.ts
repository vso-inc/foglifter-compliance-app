import { SubMgmtChangeLog } from "../subMgmtChangeLog/SubMgmtChangeLog";

export type SubMgmtChangeLogStatus = {
  id: number;
  status: string;
  subMgmtChangeLog?: Array<SubMgmtChangeLog>;
};
