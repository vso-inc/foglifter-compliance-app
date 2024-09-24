import { BigfixRequestType as TBigfixRequestType } from "../api/bigfixRequestType/BigfixRequestType";

export const BIGFIXREQUESTTYPE_TITLE_FIELD = "requestType";

export const BigfixRequestTypeTitle = (record: TBigfixRequestType): string => {
  return record.requestType?.toString() || String(record.id);
};
