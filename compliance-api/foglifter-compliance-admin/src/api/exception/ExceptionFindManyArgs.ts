import { ExceptionWhereInput } from "./ExceptionWhereInput";
import { ExceptionOrderByInput } from "./ExceptionOrderByInput";

export type ExceptionFindManyArgs = {
  where?: ExceptionWhereInput;
  orderBy?: Array<ExceptionOrderByInput>;
  skip?: number;
  take?: number;
};
