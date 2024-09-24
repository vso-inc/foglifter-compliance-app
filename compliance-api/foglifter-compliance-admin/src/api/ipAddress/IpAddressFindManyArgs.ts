import { IpAddressWhereInput } from "./IpAddressWhereInput";
import { IpAddressOrderByInput } from "./IpAddressOrderByInput";

export type IpAddressFindManyArgs = {
  where?: IpAddressWhereInput;
  orderBy?: Array<IpAddressOrderByInput>;
  skip?: number;
  take?: number;
};
