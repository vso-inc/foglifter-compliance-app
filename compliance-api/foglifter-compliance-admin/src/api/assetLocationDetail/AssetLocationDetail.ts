import { Asset } from "../asset/Asset";

export type AssetLocationDetail = {
  asset?: Asset | null;
  created: Date;
  id: bigint;
  inDataCenter: boolean | null;
  locationBuilding: string | null;
  locationCode: string | null;
  locationFloor: string | null;
  locationFull: string | null;
  locationGrid: string | null;
  locationPhysical: string | null;
  region: string | null;
  serviceArea: string | null;
  updated: Date;
};
