import { AttestationType as TAttestationType } from "../api/attestationType/AttestationType";

export const ATTESTATIONTYPE_TITLE_FIELD = "name";

export const AttestationTypeTitle = (record: TAttestationType): string => {
  return record.name?.toString() || String(record.id);
};
