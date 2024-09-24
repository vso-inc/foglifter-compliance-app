import { Attestation as TAttestation } from "../api/attestation/Attestation";

export const ATTESTATION_TITLE_FIELD = "alternateContactEmail";

export const AttestationTitle = (record: TAttestation): string => {
  return record.alternateContactEmail?.toString() || String(record.id);
};
