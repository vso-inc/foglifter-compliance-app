import { ConfigModelWhereInput } from "./ConfigModelWhereInput";
import { ConfigModelOrderByInput } from "./ConfigModelOrderByInput";

export type ConfigModelFindManyArgs = {
  where?: ConfigModelWhereInput;
  orderBy?: Array<ConfigModelOrderByInput>;
  skip?: number;
  take?: number;
};
