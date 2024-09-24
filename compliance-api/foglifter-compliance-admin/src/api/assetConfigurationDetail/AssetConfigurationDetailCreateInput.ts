import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type AssetConfigurationDetailCreateInput = {
  asset?: AssetWhereUniqueInput | null;
  assetTag?: string | null;
  bios?: Date | null;
  brand?: string | null;
  cpuCount?: number | null;
  cpuSpeed?: string | null;
  cpuType?: string | null;
  cpuVersion?: string | null;
  inService?: Date | null;
  lastHardwareScan?: Date | null;
  model?: string | null;
  nature?: string | null;
  operatingSystem?: string | null;
  role?: string | null;
  scanExemptReason?: string | null;
  serial: string;
  status?: string | null;
  typeField?: string | null;
};
