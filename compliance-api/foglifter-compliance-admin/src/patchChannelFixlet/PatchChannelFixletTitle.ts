import { PatchChannelFixlet as TPatchChannelFixlet } from "../api/patchChannelFixlet/PatchChannelFixlet";

export const PATCHCHANNELFIXLET_TITLE_FIELD = "fixletName";

export const PatchChannelFixletTitle = (
  record: TPatchChannelFixlet
): string => {
  return record.fixletName?.toString() || String(record.id);
};
