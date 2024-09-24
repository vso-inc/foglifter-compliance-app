import { AssetNetworkDetailWhereInput } from "./AssetNetworkDetailWhereInput";
import { AssetNetworkDetailOrderByInput } from "./AssetNetworkDetailOrderByInput";

export type AssetNetworkDetailFindManyArgs = {
  where?: AssetNetworkDetailWhereInput;
  orderBy?: Array<AssetNetworkDetailOrderByInput>;
  skip?: number;
  take?: number;
};
