import { AttestationHostFixletCreateNestedManyWithoutPatchChannelFixletsInput } from "./AttestationHostFixletCreateNestedManyWithoutPatchChannelFixletsInput";
import { PatchChannelWhereUniqueInput } from "../patchChannel/PatchChannelWhereUniqueInput";

export type PatchChannelFixletCreateInput = {
  attestationHostFixlet?: AttestationHostFixletCreateNestedManyWithoutPatchChannelFixletsInput;
  commonPlatformEnumerationTag?: string | null;
  fixletCategory?: string | null;
  fixletName?: string | null;
  fixletSourceReleased?: Date | null;
  fixletTag?: string | null;
  patchChannel?: PatchChannelWhereUniqueInput | null;
  relevantCount?: string | null;
  site?: string | null;
  updatedBy: string;
};
