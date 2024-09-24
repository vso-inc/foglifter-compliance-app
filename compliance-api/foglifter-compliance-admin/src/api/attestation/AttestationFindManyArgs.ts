import { AttestationWhereInput } from "./AttestationWhereInput";
import { AttestationOrderByInput } from "./AttestationOrderByInput";

export type AttestationFindManyArgs = {
  where?: AttestationWhereInput;
  orderBy?: Array<AttestationOrderByInput>;
  skip?: number;
  take?: number;
};
