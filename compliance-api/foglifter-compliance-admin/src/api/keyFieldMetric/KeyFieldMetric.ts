export type KeyFieldMetric = {
  columnName: string;
  columnValue: string;
  created: Date;
  errorIfPercentChangeExceeds: number;
  id: number;
  lastPassedValidation: Date | null;
  note: string | null;
  statisticOperation: string;
  tableName: string;
  updated: Date;
  updatedBy: string;
  valueCount: number;
  warnIfPercentChangeExceeds: number;
};
