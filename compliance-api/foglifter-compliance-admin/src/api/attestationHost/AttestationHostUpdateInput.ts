import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AttestationWhereUniqueInput } from "../attestation/AttestationWhereUniqueInput";
import { AttestationHostFixletUpdateManyWithoutAttestationHostsInput } from "./AttestationHostFixletUpdateManyWithoutAttestationHostsInput";

export type AttestationHostUpdateInput = {
  asset?: AssetWhereUniqueInput;
  attestation?: AttestationWhereUniqueInput;
  attestationHostFixlet?: AttestationHostFixletUpdateManyWithoutAttestationHostsInput;
  isSupportedByThirdParty?: boolean | null;
  updatedBy?: string;
};
