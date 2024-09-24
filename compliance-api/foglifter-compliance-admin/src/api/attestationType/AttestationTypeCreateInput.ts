import { AttestationCreateNestedManyWithoutAttestationTypesInput } from "./AttestationCreateNestedManyWithoutAttestationTypesInput";

export type AttestationTypeCreateInput = {
  attestation?: AttestationCreateNestedManyWithoutAttestationTypesInput;
  description: string;
  name: string;
  updatedBy: string;
};
