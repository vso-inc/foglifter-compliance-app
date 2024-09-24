import { AttestationTypeWhereInput } from "./AttestationTypeWhereInput";
import { AttestationTypeOrderByInput } from "./AttestationTypeOrderByInput";

export type AttestationTypeFindManyArgs = {
  where?: AttestationTypeWhereInput;
  orderBy?: Array<AttestationTypeOrderByInput>;
  skip?: number;
  take?: number;
};
