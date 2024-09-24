import { DatasourceDeviceWhereInput } from "./DatasourceDeviceWhereInput";
import { DatasourceDeviceOrderByInput } from "./DatasourceDeviceOrderByInput";

export type DatasourceDeviceFindManyArgs = {
  where?: DatasourceDeviceWhereInput;
  orderBy?: Array<DatasourceDeviceOrderByInput>;
  skip?: number;
  take?: number;
};
