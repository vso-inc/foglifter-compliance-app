export type KeyFieldMetricCreateInput = {
  columnName: string;
  columnValue: string;
  errorIfPercentChangeExceeds: number;
  lastPassedValidation?: Date | null;
  note?: string | null;
  statisticOperation: string;
  tableName: string;
  updatedBy: string;
  valueCount: number;
  warnIfPercentChangeExceeds: number;
};
