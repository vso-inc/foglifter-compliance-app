import { AttestationHost as TAttestationHost } from "../api/attestationHost/AttestationHost";

export const ATTESTATIONHOST_TITLE_FIELD = "updatedBy";

export const AttestationHostTitle = (record: TAttestationHost): string => {
  return record.updatedBy?.toString() || String(record.id);
};
