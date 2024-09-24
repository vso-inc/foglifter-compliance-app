import { Exception as TException } from "../api/exception/Exception";

export const EXCEPTION_TITLE_FIELD = "exceptionReason";

export const ExceptionTitle = (record: TException): string => {
  return record.exceptionReason?.toString() || String(record.id);
};
