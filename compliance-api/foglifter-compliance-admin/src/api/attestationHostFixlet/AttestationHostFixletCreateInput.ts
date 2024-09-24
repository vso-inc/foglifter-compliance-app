import { AttestationHostWhereUniqueInput } from "../attestationHost/AttestationHostWhereUniqueInput";
import { PatchChannelFixletWhereUniqueInput } from "../patchChannelFixlet/PatchChannelFixletWhereUniqueInput";

export type AttestationHostFixletCreateInput = {
  attestationHost: AttestationHostWhereUniqueInput;
  checklistId?: number | null;
  checklistName?: string | null;
  name: string;
  patchChannelFixlet: PatchChannelFixletWhereUniqueInput;
  tssSpec?: string | null;
  updatedBy: string;
};
