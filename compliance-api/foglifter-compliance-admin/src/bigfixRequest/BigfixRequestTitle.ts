import { BigfixRequest as TBigfixRequest } from "../api/bigfixRequest/BigfixRequest";

export const BIGFIXREQUEST_TITLE_FIELD = "httpResponse";

export const BigfixRequestTitle = (record: TBigfixRequest): string => {
  return record.httpResponse?.toString() || String(record.id);
};
