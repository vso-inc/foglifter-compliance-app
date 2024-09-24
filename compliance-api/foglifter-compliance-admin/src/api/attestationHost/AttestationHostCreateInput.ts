import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";
import { AttestationWhereUniqueInput } from "../attestation/AttestationWhereUniqueInput";
import { AttestationHostFixletCreateNestedManyWithoutAttestationHostsInput } from "./AttestationHostFixletCreateNestedManyWithoutAttestationHostsInput";

export type AttestationHostCreateInput = {
  asset: AssetWhereUniqueInput;
  attestation: AttestationWhereUniqueInput;
  attestationHostFixlet?: AttestationHostFixletCreateNestedManyWithoutAttestationHostsInput;
  isSupportedByThirdParty?: boolean | null;
  updatedBy: string;
};
