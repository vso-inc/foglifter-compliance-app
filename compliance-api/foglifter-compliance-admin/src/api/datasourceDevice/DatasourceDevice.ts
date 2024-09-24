import { Asset } from "../asset/Asset";

export type DatasourceDevice = {
  asset?: Asset | null;
  created: Date;
  datasourceId: number | null;
  id: bigint;
  isDeleted: boolean | null;
  isLocked: boolean | null;
  lastReportSent: Date | null;
  lastReportTime: Date | null;
  name: string | null;
  reportNumber: bigint;
  updated: Date;
  updatedBy: string;
};
