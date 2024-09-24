import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type AssetLocationDetailUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  inDataCenter?: boolean | null;
  locationBuilding?: string | null;
  locationCode?: string | null;
  locationFloor?: string | null;
  locationFull?: string | null;
  locationGrid?: string | null;
  locationPhysical?: string | null;
  region?: string | null;
  serviceArea?: string | null;
};
