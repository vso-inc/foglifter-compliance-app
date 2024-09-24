import { AssetLocationDetailWhereInput } from "./AssetLocationDetailWhereInput";
import { AssetLocationDetailOrderByInput } from "./AssetLocationDetailOrderByInput";

export type AssetLocationDetailFindManyArgs = {
  where?: AssetLocationDetailWhereInput;
  orderBy?: Array<AssetLocationDetailOrderByInput>;
  skip?: number;
  take?: number;
};
