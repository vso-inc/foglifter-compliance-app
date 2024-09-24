import { KeyFieldMetric as TKeyFieldMetric } from "../api/keyFieldMetric/KeyFieldMetric";

export const KEYFIELDMETRIC_TITLE_FIELD = "columnName";

export const KeyFieldMetricTitle = (record: TKeyFieldMetric): string => {
  return record.columnName?.toString() || String(record.id);
};
