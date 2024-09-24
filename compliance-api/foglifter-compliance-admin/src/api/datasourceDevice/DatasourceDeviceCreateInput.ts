import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type DatasourceDeviceCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  datasourceId?: number | null;
  isDeleted?: boolean | null;
  isLocked?: boolean | null;
  lastReportSent?: Date | null;
  lastReportTime?: Date | null;
  name?: string | null;
  reportNumber: bigint;
  updatedBy: string;
};
