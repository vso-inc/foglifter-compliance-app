import { SubnetWhereInput } from "./SubnetWhereInput";
import { SubnetOrderByInput } from "./SubnetOrderByInput";

export type SubnetFindManyArgs = {
  where?: SubnetWhereInput;
  orderBy?: Array<SubnetOrderByInput>;
  skip?: number;
  take?: number;
};
