import { ConfigModel as TConfigModel } from "../api/configModel/ConfigModel";

export const CONFIGMODEL_TITLE_FIELD = "configName";

export const ConfigModelTitle = (record: TConfigModel): string => {
  return record.configName?.toString() || String(record.id);
};
