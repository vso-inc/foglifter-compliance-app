import { ExceptionWhereUniqueInput } from "./ExceptionWhereUniqueInput";
import { ExceptionUpdateInput } from "./ExceptionUpdateInput";

export type UpdateExceptionArgs = {
  where: ExceptionWhereUniqueInput;
  data: ExceptionUpdateInput;
};
