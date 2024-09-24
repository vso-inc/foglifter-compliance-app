import { AttestationHostFixlet } from "../attestationHostFixlet/AttestationHostFixlet";
import { PatchChannel } from "../patchChannel/PatchChannel";

export type PatchChannelFixlet = {
  attestationHostFixlet?: Array<AttestationHostFixlet>;
  commonPlatformEnumerationTag: string | null;
  created: Date;
  fixletCategory: string | null;
  fixletName: string | null;
  fixletSourceReleased: Date | null;
  fixletTag: string | null;
  id: number;
  patchChannel?: PatchChannel | null;
  relevantCount: string | null;
  site: string | null;
  updated: Date;
  updatedBy: string;
};
