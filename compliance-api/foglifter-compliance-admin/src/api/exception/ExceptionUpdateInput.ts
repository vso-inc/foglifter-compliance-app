import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type ExceptionUpdateInput = {
  asset?: AssetWhereUniqueInput | null;
  exceptionEnd?: Date | null;
  exceptionReason?: string | null;
  exceptionStart?: Date | null;
  exceptionType?: string | null;
  updatedBy?: string;
};
