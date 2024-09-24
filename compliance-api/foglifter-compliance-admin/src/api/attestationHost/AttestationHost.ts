import { Asset } from "../asset/Asset";
import { Attestation } from "../attestation/Attestation";
import { AttestationHostFixlet } from "../attestationHostFixlet/AttestationHostFixlet";

export type AttestationHost = {
  asset?: Asset;
  attestation?: Attestation;
  attestationHostFixlet?: Array<AttestationHostFixlet>;
  created: Date;
  id: number;
  isSupportedByThirdParty: boolean | null;
  updated: Date;
  updatedBy: string;
};
