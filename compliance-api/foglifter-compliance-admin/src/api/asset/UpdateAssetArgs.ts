import { AssetWhereUniqueInput } from "./AssetWhereUniqueInput";
import { AssetUpdateInput } from "./AssetUpdateInput";

export type UpdateAssetArgs = {
  where: AssetWhereUniqueInput;
  data: AssetUpdateInput;
};
