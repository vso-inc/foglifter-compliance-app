import { AssetConfigurationDetailWhereInput } from "./AssetConfigurationDetailWhereInput";
import { AssetConfigurationDetailOrderByInput } from "./AssetConfigurationDetailOrderByInput";

export type AssetConfigurationDetailFindManyArgs = {
  where?: AssetConfigurationDetailWhereInput;
  orderBy?: Array<AssetConfigurationDetailOrderByInput>;
  skip?: number;
  take?: number;
};
