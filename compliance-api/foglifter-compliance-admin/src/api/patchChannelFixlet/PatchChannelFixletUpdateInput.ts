import { AttestationHostFixletUpdateManyWithoutPatchChannelFixletsInput } from "./AttestationHostFixletUpdateManyWithoutPatchChannelFixletsInput";
import { PatchChannelWhereUniqueInput } from "../patchChannel/PatchChannelWhereUniqueInput";

export type PatchChannelFixletUpdateInput = {
  attestationHostFixlet?: AttestationHostFixletUpdateManyWithoutPatchChannelFixletsInput;
  commonPlatformEnumerationTag?: string | null;
  fixletCategory?: string | null;
  fixletName?: string | null;
  fixletSourceReleased?: Date | null;
  fixletTag?: string | null;
  patchChannel?: PatchChannelWhereUniqueInput | null;
  relevantCount?: string | null;
  site?: string | null;
  updatedBy?: string;
};
