import { ApplicationContactWhereInput } from "./ApplicationContactWhereInput";
import { ApplicationContactOrderByInput } from "./ApplicationContactOrderByInput";

export type ApplicationContactFindManyArgs = {
  where?: ApplicationContactWhereInput;
  orderBy?: Array<ApplicationContactOrderByInput>;
  skip?: number;
  take?: number;
};
