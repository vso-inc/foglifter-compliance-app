import { EnvironmentWhereInput } from "./EnvironmentWhereInput";
import { EnvironmentOrderByInput } from "./EnvironmentOrderByInput";

export type EnvironmentFindManyArgs = {
  where?: EnvironmentWhereInput;
  orderBy?: Array<EnvironmentOrderByInput>;
  skip?: number;
  take?: number;
};
