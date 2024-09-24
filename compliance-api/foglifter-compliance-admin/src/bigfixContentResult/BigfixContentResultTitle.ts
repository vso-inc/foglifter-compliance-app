import { BigfixContentResult as TBigfixContentResult } from "../api/bigfixContentResult/BigfixContentResult";

export const BIGFIXCONTENTRESULT_TITLE_FIELD = "id";

export const BigfixContentResultTitle = (
  record: TBigfixContentResult
): string => {
  return record.id?.toString() || String(record.id);
};
