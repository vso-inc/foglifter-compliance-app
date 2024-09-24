import { Attestation } from "../attestation/Attestation";

export type AttestationType = {
  attestation?: Array<Attestation>;
  created: Date;
  description: string;
  id: number;
  name: string;
  updated: Date;
  updatedBy: string;
};
