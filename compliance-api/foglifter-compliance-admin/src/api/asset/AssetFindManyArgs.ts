import { AssetWhereInput } from "./AssetWhereInput";
import { AssetOrderByInput } from "./AssetOrderByInput";

export type AssetFindManyArgs = {
  where?: AssetWhereInput;
  orderBy?: Array<AssetOrderByInput>;
  skip?: number;
  take?: number;
};
