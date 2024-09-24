import { PatchChannel as TPatchChannel } from "../api/patchChannel/PatchChannel";

export const PATCHCHANNEL_TITLE_FIELD = "name";

export const PatchChannelTitle = (record: TPatchChannel): string => {
  return record.name?.toString() || String(record.id);
};
