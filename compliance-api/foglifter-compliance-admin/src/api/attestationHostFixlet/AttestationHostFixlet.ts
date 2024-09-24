import { AttestationHost } from "../attestationHost/AttestationHost";
import { PatchChannelFixlet } from "../patchChannelFixlet/PatchChannelFixlet";

export type AttestationHostFixlet = {
  attestationHost?: AttestationHost;
  checklistId: number | null;
  checklistName: string | null;
  created: Date;
  id: number;
  name: string;
  patchChannelFixlet?: PatchChannelFixlet;
  tssSpec: string | null;
  updated: Date;
  updatedBy: string;
};
