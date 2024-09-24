import { DatasourceDevice as TDatasourceDevice } from "../api/datasourceDevice/DatasourceDevice";

export const DATASOURCEDEVICE_TITLE_FIELD = "name";

export const DatasourceDeviceTitle = (record: TDatasourceDevice): string => {
  return record.name?.toString() || String(record.id);
};
