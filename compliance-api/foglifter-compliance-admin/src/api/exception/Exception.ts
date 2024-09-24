import { Asset } from "../asset/Asset";

export type Exception = {
  asset?: Asset | null;
  created: Date;
  exceptionEnd: Date | null;
  exceptionReason: string | null;
  exceptionStart: Date | null;
  exceptionType: string | null;
  id: number;
  updated: Date;
  updatedBy: string;
};
