import { AttestationHostWhereInput } from "./AttestationHostWhereInput";
import { AttestationHostOrderByInput } from "./AttestationHostOrderByInput";

export type AttestationHostFindManyArgs = {
  where?: AttestationHostWhereInput;
  orderBy?: Array<AttestationHostOrderByInput>;
  skip?: number;
  take?: number;
};
