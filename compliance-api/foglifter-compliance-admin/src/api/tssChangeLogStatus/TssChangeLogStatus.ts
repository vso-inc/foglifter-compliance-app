import { TssChangeLog } from "../tssChangeLog/TssChangeLog";

export type TssChangeLogStatus = {
  id: number;
  status: string;
  tssChangeLog?: Array<TssChangeLog>;
};
