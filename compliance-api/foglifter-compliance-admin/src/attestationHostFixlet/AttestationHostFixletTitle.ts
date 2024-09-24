import { AttestationHostFixlet as TAttestationHostFixlet } from "../api/attestationHostFixlet/AttestationHostFixlet";

export const ATTESTATIONHOSTFIXLET_TITLE_FIELD = "checklistName";

export const AttestationHostFixletTitle = (
  record: TAttestationHostFixlet
): string => {
  return record.checklistName?.toString() || String(record.id);
};
